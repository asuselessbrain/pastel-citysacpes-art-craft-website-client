

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <p className="text-sm">&copy; 2024 PastelCityscapes. All rights reserved.</p>
                <p className="text-sm">Designed with ❤️ by <a href="#" className="text-blue-400">PastelCityscapes</a></p>
                <p className="text-sm">Dumki, Patuakhali, Bangladesh</p>
                <p className="text-sm">Phone: +1 (555) 123-4567</p>
                <p className="text-sm">Email: info@pastel-cityscapes.com</p>

                <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-blue-400 hover:text-blue-300"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-blue-400 hover:text-blue-300"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-blue-400 hover:text-blue-300"><i className="fab fa-linkedin"></i></a>
                    {/* Replace the # above with your social media links */}
                </div>

                <div className="mt-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
                    {/* Replace the # above with your privacy policy and terms of service links */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
