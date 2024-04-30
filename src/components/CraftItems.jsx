import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CraftItems = ({ item }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, item_name, category_name, price, rating, processing_time, stock_status, image } = item;
    return (


        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border dark:text-white dark:bg-gray-500 rounded-xl">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src={image}
                    alt="card-image" />
            </div>
            <div className="p-6">
                <h5 className="block  mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {item_name}
                </h5>
                <p className="mb-4"><span className="font-bold text-gray-700">Category:</span> {category_name}</p>
                <p className="mb-4"><span className="font-bold text-gray-700">Price:</span> <span className="text-red-500">{price}</span></p>
                <p className="mb-4"><span className="font-bold text-gray-700">Rating:</span> {rating}</p>
                <p className="mb-4"><span className="font-bold text-gray-700">Processing Time:</span> {processing_time}</p>
                <p className="mb-4"><span className="font-bold text-gray-700">Stock Status:</span> <span className="text-white bg-green-500 p-1 rounded-full px-3 ml-2">{stock_status}</span></p>
            </div>
            <div className="p-6 pt-0">
                <Link to={`/view-details/${_id}`}>
                    <button className="transition flex-1 ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-white rounded py-2 md:py-1 text-center  flex justify-center items-center px-4 font-medium text-sm">
                        <span className=" mr-2">
                            <i className="bx bxs-low-vision"></i>
                        </span>

                        <span>Details</span>
                    </button>

                </Link>
            </div>
        </div >


    );
};

export default CraftItems;