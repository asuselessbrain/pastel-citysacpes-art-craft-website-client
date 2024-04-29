import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myAddCraft/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/add-craft-item/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            // Update items state by filtering out the deleted item
                            setItems(prevItems => prevItems.filter(item => item._id !== _id));
                        }
                    })
                    .catch(error => console.error('Error deleting item:', error));
            }
        });
    }

    return (
        <div>
            <h2 className="font-extrabold text-black dark:text-white mt-8 text-5xl mb-10 text-center">All Art & Craft Items</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto">
                {items.map(item => (
                    <div key={item._id}>
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img className="rounded-t-lg" src={item.image} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.item_name}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold text-gray-700">Category:</span> {item.category_name}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold text-gray-700">Descriptio:</span> {item.short_descriptio}</p>
                                <p className="mb-4"><span className="font-bold text-gray-700">Price:</span> <span className="text-red-500">{item.price}</span></p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold text-gray-700">Rating:</span> {item.rating}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold text-gray-700">Customization:</span> {item.customization}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold text-gray-700">Processing Time:</span> {item.processing_time}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold text-gray-700">Stock Status:</span> <span className="text-green-500">{item.stock_status}</span></p>

                            </div>

                            <div className="flex items-center space-x-6 ml-6 mb-4">
                                <Link to={`/update-item/${item._id}`}><button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Update
                                </button></Link>

                                <button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Delete
                                </button>
                            </div>

                        </div>
                        I
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArtAndCraftList;
