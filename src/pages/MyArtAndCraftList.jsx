import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/myProduct/${user.email}`)
                .then(res => res.json())
                .then(data => setItems(data))
                .catch(error => console.error("Error fetching data:", error));
        }
    }, [user]);

    return (
        <div>
            {items.map(item => (
                <div key={item._id}>
                    <h1>Hello</h1>
                    {/* Render other properties of the item */}
                </div>
            ))}
        </div>
    );
};

export default MyArtAndCraftList;
