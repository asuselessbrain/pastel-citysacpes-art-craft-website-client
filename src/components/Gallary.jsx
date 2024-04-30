import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

import { useEffect, useState } from 'react';


const GallerySection = () => {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        fetch('https://backend-omega-snowy.vercel.app/gallery')
            .then(res => res.json())
            .then(data => {
                setGallery(data);
            })
    }, []);



    return (
        <div className="bg-gray-100 py-12 mt-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Art & Craft Gallery</h2>
                <p className="text-center text-gray-600 mb-8">Explore our collection of stunning artworks.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" data-aos="zoom-in-up " data-aos-duration="2000">
                    {
                        gallery.map(image => <div key={image._id}><img src={image.image} alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" /></div>)
                    }
                </div>
                <div className="text-center mt-8">
                    <button className="text-white bg-[#FF497C] border-0 py-2 px-6 focus:outline-none hover:bg-[#ab3154] rounded font-semibold duration-200">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;
