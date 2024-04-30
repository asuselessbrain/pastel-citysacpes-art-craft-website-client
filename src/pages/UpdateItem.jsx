import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const item = useLoaderData();

    const { item_name, category_name, short_description, price, rating, customization, processing_time, stock_status, image, email, userName } = item

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const updatedProduct = {
            item_name: form.item_name.value,
            category_name: form.category_name.value,
            short_description: form.short_description.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            processing_time: form.processing_time.value,
            stock_status: form.stock_status.value,
            image: form.image.value
        };

        fetch(`https://backend-omega-snowy.vercel.app/add-craft-item/${item._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Updated Successful',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screenpt-6 flex items-center justify-center">
            <div className="container mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-md">
                <h1 className="text-3xl text-center font-semibold mb-4 text-gray-800 dark:text-white">Add Craft Item</h1>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Item Name */}
                        <div>
                            <label htmlFor="item_name" className="block mb-2 text-gray-800 dark:text-white">Item Name</label>
                            <input type="text" id="item_name" name="item_name" defaultValue={item_name} placeholder="Item Name" className="border rounded-md p-2 w-full" />
                        </div>
                        {/* Category */}
                        <div>
                            <label htmlFor="category_name" className="block mb-2 text-gray-800 dark:text-white">Category Name</label>
                            <select id="category_name" name="category_name" defaultValue={category_name} className="border rounded-md p-2 w-full">
                                <option value="">Select Category</option>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>
                        </div>
                        {/* Short Description */}
                        <div>
                            <label htmlFor="short_description" className="block mb-2 text-gray-800 dark:text-white">Description</label>
                            <input type="text" id="short_description" defaultValue={short_description} placeholder="Write Short Description" name="short_description" className="border rounded-md p-2 w-full" />
                        </div>
                        {/* Price */}
                        <div>
                            <label htmlFor="price" className="block mb-2 text-gray-800 dark:text-white">Price</label>
                            <input type="text" id="price" placeholder="Price" defaultValue={price} name="price" className="border rounded-md p-2 w-full" />
                        </div>
                        {/* Rating */}
                        <div>
                            <label htmlFor="rating" className="block mb-2 text-gray-800 dark:text-white">Rating</label>
                            <input type="text" id="rating" placeholder="Rating" defaultValue={rating} name="rating" className="border rounded-md p-2 w-full" />
                        </div>
                        {/* Customization */}
                        <div>
                            <label htmlFor="customization" className="block mb-2 text-gray-800 dark:text-white">Customization</label>
                            <select id="customization" name="customization" defaultValue={customization} className="border rounded-md p-2 w-full">
                                <option value="">Customization</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        {/* Processing Time */}
                        <div>
                            <label htmlFor="processing_time" className="block mb-2 text-gray-800 dark:text-white">Processing Time</label>
                            <input type="text" id="processing_time" defaultValue={processing_time} placeholder="Processing Time" name="processing_time" className="border rounded-md p-2 w-full" />
                        </div>
                        {/* Stock Status */}
                        <div>
                            <label htmlFor="stock_status" className="block mb-2 text-gray-800 dark:text-white">Stock Status</label>
                            <select id="stock_status" name="stock_status" defaultValue={stock_status} className="border rounded-md p-2 w-full">
                                <option value="">Stock Status</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                        </div>
                    </div>
                    {/* Image URL */}
                    <div>
                        <label htmlFor="image" className="block mb-2 text-gray-800 dark:text-white">Image URL</label>
                        <input type="text" id="image" name="image" defaultValue={image} placeholder="Image URL" className="border rounded-md p-2 w-full" />
                    </div>
                    {/* Add button */}
                    <button type="submit" className="px-4 w-full py-2 mt-10 rounded hover:bg-[#ab3154] bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;