
const ViewCraft = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Product Image Section */}
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img src="product-image.jpg" alt="Product" className="w-full rounded-lg shadow-md mb-4 md:mb-0" />
                    </div>
                    {/* Product Information Section */}
                    <div className="md:w-1/2 md:pl-8">
                        <h2 className="text-2xl font-semibold mb-4">Product Name</h2>
                        <p className="text-gray-700 mb-4">Product Description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className="text-gray-700 mb-4">Price: $99</p>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-700 mr-2">Rating:</span>
                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2 10c0-2.42 2.29-4.46 5.55-5.86a.65.65 0 01.9.62c0 .22-.08.43-.25.59L5.56 10l2.64 4.65a.65.65 0 01-.25.59.64.64 0 01-.9-.61C4.29 14.46 2 12.42 2 10zM11 4.15l-.8 1.42.86 1.51 1.63.26-1.88 1.63-.72 1.22v2.94h1.88v-2.5l1.67-1.51L15 9.7l-.86-1.51L14 4.15v-.01L13.8 4l-.8-.85-.2-.14V4h-.01z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">4.5</span>
                            </div>
                        </div>
                        <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ViewCraft;