import { Link, useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import CraftItems from "../components/CraftItems";
import ArtAndCraftCategories from "../components/ArtAndCraftCategories";
import Gallary from "../components/Gallary";
import CustomerReview from "../components/CustomerReview";

const Home = () => {
    const craftItems = useLoaderData();

    // Slice the first 6 items if there are more than 6
    const displayItems = craftItems.slice(0, 6);

    return (
        <div>
            <Slider />

            <ArtAndCraftCategories />
            <div className=" mt-20">

                <h2 className="text-center font-bold text-5xl mb-16">Popular Craft & Images</h2>
                <div className="grid xl:grid-cols-3 mg:grid-cols-2 grid-cols-1 gap-10 container mx-auto">
                    {displayItems.map(item => (
                        <CraftItems key={item._id} item={item} />
                    ))}
                </div>
            </div>

            {craftItems.length > 6 && (
                <div className="mt-10 flex justify-center">
                    <Link to="/all-art-and-craft">
                        <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">Show All</button>
                    </Link>
                </div>
            )}

            <Gallary />

            <CustomerReview />
        </div>
    );
};

export default Home;
