// import { useContext } from "react";
// import { AuthContext } from "../../authProvider/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";


// const PrivateRouts = ({ children }) => {

//     const { user, loading } = useContext(AuthContext)

//     const location = useLocation();

//     console.log(location)

//     if (loading) {
//         return <div className="flex justify-center items-center h-screen">
//             <span className="loading loading-spinner " style={{ width: "8rem", height: "8rem" }}></span>
//         </div>
//     }



//     else if (!user) {
//         return <Navigate to="/sign-in" state={location?.pathname || "/"} />
//     }
//     return (
//         <div>
//             {
//                 children
//             }
//         </div>
//     );
// };

// export default PrivateRouts;


import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';


// eslint-disable-next-line react/prop-types
const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext) || {};
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner " style={{ width: "8rem", height: "8rem" }}></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location?.pathname || "/"} to={`/sign-in`} replace />
};

export default PrivateRouts; 