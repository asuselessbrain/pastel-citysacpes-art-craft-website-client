import { Link, useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import CraftItems from "../components/CraftItems";
import AllArtAndCraft from "./AllArtAndCraft";

const Home = () => {
    const craftItems = useLoaderData();

    // Slice the first 6 items if there are more than 6
    const displayItems = craftItems.slice(0, 6);

    return (
        <div>
            <Slider />
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mt-10">
                {displayItems.map(item => (
                    <CraftItems key={item._id} item={item} />
                ))}
            </div>
            
            {craftItems.length > 6 && (
                <div className="mt-10 flex justify-center">
                    <Link to="/all-art-and-craft">
                        <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">Show All</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Home;
