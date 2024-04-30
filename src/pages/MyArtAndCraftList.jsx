import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [customization, setCustomization] = useState('');

    useEffect(() => {
        if (user?.email) {
            fetch(`https://backend-omega-snowy.vercel.app/myAddCraft/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setItems(data);
                })
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
                fetch(`https://backend-omega-snowy.vercel.app/add-craft-item/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                            setItems(prevItems => prevItems.filter(item => item._id !== _id));
                        }
                    })
            }
        });
    }

    const email = user.email;

    console.log(email)

    useEffect(() => {
        const fetchItems = async () => {

            const response = await fetch(`https://backend-omega-snowy.vercel.app/${email}/customization/${customization}`);
            const data = await response.json();
            setItems(data);

        };

        if (email) {
            fetchItems();
        }
    }, [email, customization]);


    const handleCustomizationChange = (e) => {
        setCustomization(e.target.value);
    };
    console.log(customization)


    return (
        <div>
            <h2 className="font-extrabold text-black dark:text-white mt-8 text-5xl mb-10 text-center">All Art & Craft Items</h2>

            <div className="text-center mb-8 text-xl font-semibold">
                <label htmlFor="customization">Filter by Customization:</label>
                <select id="customization" className="py-2 px-4 ml-2 bg-green-400 rounded-md text-white" value={customization} onChange={handleCustomizationChange}>
                    <option value="">Customization</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

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
