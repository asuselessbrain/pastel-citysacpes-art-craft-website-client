import notFoundImage from "../assets/images/notFound.avif"

const PageNotFound = () => {
    return (
        <div>
            <img className="w-full" src={notFoundImage} alt="" />
        </div>
    );
};

export default PageNotFound;