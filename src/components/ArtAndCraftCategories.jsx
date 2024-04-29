
const ArtAndCraftCategories = () => {
  const categories = [
    {
      title: "Landscape Painting",
      header: "Explore the Beauty of Nature",
      description: "Immerse yourself in the tranquility of landscapes with our exquisite collection of landscape paintings.",
      image: "landscape.jpg",
    },
    {
      title: "Portrait Drawing",
      header: "Capture the Essence of Personality",
      description: "Discover the art of portraiture and bring your loved ones to life with our detailed portrait drawings.",
      image: "portrait.jpg",
    },
    {
      title: "Watercolour Painting",
      header: "Vibrant and Expressive",
      description: "Let your creativity flow with our watercolour painting collection, known for its rich and vibrant hues.",
      image: "watercolour.jpg",
    },
    {
      title: "Oil Painting",
      header: "Timeless Elegance in Every Stroke",
      description: "Experience the depth and richness of oil painting, a classic medium loved by artists throughout history.",
      image: "oil.jpg",
    },
    {
      title: "Charcoal Sketching",
      header: "Bold and Dramatic",
      description: "Make a statement with our charcoal sketches, known for their bold lines and dramatic contrasts.",
      image: "charcoal.jpg",
    },
    {
      title: "Cartoon Drawing",
      header: "Bring Your Imagination to Life",
      description: "Explore the whimsical world of cartoons and let your creativity soar with our cartoon drawing collection.",
      image: "cartoon.jpg",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
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

const CategoryCard = ({ title, header, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <h4 className="text-lg text-gray-600 mb-2">{header}</h4>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
          View More
        </button>
      </div>
    </div>
  );
};

export default ArtAndCraftCategories;
