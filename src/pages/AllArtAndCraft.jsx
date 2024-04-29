import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraft = () => {
    const craftItems = useLoaderData();

    return (

        <div>
            <h2 className="font-extrabold text-black dark:text-white mt-8 text-5xl mb-10 text-center">All Art & Craft Items</h2>
            <p className="text-center container mx-auto my-6 mb-10">Step into a world of creativity and imagination with our curated selection of art and craft items. From handmade pottery to intricately woven textiles, each piece celebrates the artistry of talented artisans worldwide. Whether you are decorating your home or searching for the perfect gift, our diverse collection offers something for every taste and occasion. Explore our gallery to discover unique creations that tell stories of tradition, innovation, and human expression. Join us on a journey of discovery and wonder as you explore the vibrant world of art and craft. Welcome to our sanctuary of creativity!</p>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 container mx-auto">

                {craftItems.map((item) => (
                    <div key={item._id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border dark:text-white dark:bg-gray-500 rounded-xl">
                        <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                            <img src={item.image} alt="card-image" />
                        </div>
                        <div className="p-6">
                            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                {item.item_name}
                            </h5>
                            <p className="mb-4"><span className="font-bold text-gray-700">Category:</span> {item.category_name}</p>
                            <p className="mb-4"><span className="font-bold text-gray-700">Price:</span> <span className="text-red-500">{item.price}</span></p>
                            <p className="mb-4"><span className="font-bold text-gray-700">Rating:</span> {item.rating}</p>
                            <p className="mb-4"><span className="font-bold text-gray-700">Processing Time:</span> {item.processing_time}</p>
                            <p className="mb-4"><span className="font-bold text-gray-700">Stock Status:</span> <span className="text-white bg-green-500 p-1 rounded-full px-3 ml-2">{item.stock_status}</span></p>
                        </div>
                        <div className="ml-6 mb-6">
                            <Link to={`/view-details/${item._id}`}>
                                <button className="transition flex-1 ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-white rounded py-2 md:py-1 text-center  flex justify-center items-center px-4 font-medium text-sm">
                                    <span className=" mr-2">
                                        <i className="bx bxs-low-vision"></i>
                                    </span>

                                    <span>Details</span>
                                </button>

                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllArtAndCraft;
