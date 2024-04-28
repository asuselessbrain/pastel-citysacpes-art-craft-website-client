
const AddCraftItem = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-md">
        <h1 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">Add Craft Item</h1>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Item Name */}
            <div>
              <label htmlFor="item_name" className="block mb-2 text-gray-800 dark:text-white">Item Name</label>
              <input type="text" id="item_name" name="item_name" placeholder="Item Name" className="border rounded-md p-2 w-full" />
            </div>
            {/* Category */}
            <div>
              <label htmlFor="category_name" className="block mb-2 text-gray-800 dark:text-white">Category Name</label>
              <select id="category_name" name="category_name" className="border rounded-md p-2 w-full">
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
              <input type="text" id="short_description" placeholder="Write Short Description" name="short_description" className="border rounded-md p-2 w-full" />
            </div>
            {/* Price */}
            <div>
              <label htmlFor="price" className="block mb-2 text-gray-800 dark:text-white">Price</label>
              <input type="text" id="price" placeholder="Price" name="price" className="border rounded-md p-2 w-full" />
            </div>
            {/* Rating */}
            <div>
              <label htmlFor="rating" className="block mb-2 text-gray-800 dark:text-white">Rating</label>
              <input type="text" id="rating" placeholder="Rating" name="rating" className="border rounded-md p-2 w-full" />
            </div>
            {/* Customization */}
            <div>
              <label htmlFor="customization" className="block mb-2 text-gray-800 dark:text-white">Customization</label>
              <select id="customization" name="customization" className="border rounded-md p-2 w-full">
                <option value="">Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {/* Processing Time */}
            <div>
              <label htmlFor="processing_time" className="block mb-2 text-gray-800 dark:text-white">Processing Time</label>
              <input type="text" id="processing_time" placeholder="Processing Time" name="processing_time" className="border rounded-md p-2 w-full" />
            </div>
            {/* Stock Status */}
            <div>
              <label htmlFor="stock_status" className="block mb-2 text-gray-800 dark:text-white">Stock Status</label>
              <select id="stock_status" name="stock_status" className="border rounded-md p-2 w-full">
                <option value="">Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
          </div>
          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block mb-2 text-gray-800 dark:text-white">Image URL</label>
            <input type="text" id="image" name="image" placeholder="Image URL" className="border rounded-md p-2 w-full" />
          </div>
          {/* Add button */}
          <button type="submit" className="px-4 w-full py-2 mt-10 rounded hover:bg-[#ab3154] bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold">Add</button>
        </form>
      </div>
    </div>



  );
};

export default AddCraftItem;