import { useState, useEffect } from "react";

const ArtAndCraftCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://backend-omega-snowy.vercel.app/category")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-gray-100 py-12 dark:bg-gray-700">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Art & Craft Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category_name, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image}  className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{category_name}</h3>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-full">
          View More
        </button>
      </div>
    </div>
  );
};

export default ArtAndCraftCategories;
