import { useLoaderData } from "react-router-dom";

const ViewCraft = () => {

    const craft = useLoaderData();

    const { item_name, category_name, short_descriptio, price, rating, customization, processing_time, stock_status, image } = craft;



    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Product Image Section */}
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img src={image} alt="Product" className="w-full rounded-lg shadow-md mb-4 md:mb-0" />
                    </div>
                    {/* Product Information Section */}
                    <div className="md:w-1/2 md:pl-8">
                        <h2 className="text-2xl font-semibold mb-4">{item_name}</h2>
                        <p className="mb-4 text-black dark:text-white"><span className="font-bold text-gray-700">Category:</span> {category_name}</p>
                        <p className="mb-4 text-black dark:text-white"><span className="font-bold text-gray-700">Descriptio:</span> {short_descriptio}</p>
                        <p className="mb-4"><span className="font-bold text-gray-700">Price:</span> <span className="text-red-500">{price}</span></p>
                        <p className="mb-4 text-black dark:text-white"><span className="font-bold text-gray-700">Rating:</span> {rating}</p>
                        <p className="mb-4 text-black dark:text-white"><span className="font-bold text-gray-700">Customization:</span> {customization}</p>
                        <p className="mb-4 text-black dark:text-white"><span className="font-bold text-gray-700">Processing Time:</span> {processing_time}</p>
                        <p className="mb-4 "><span className="font-bold text-gray-700">Stock Status:</span> <span className="text-green-500">{stock_status}</span></p>                        
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default ViewCraft;