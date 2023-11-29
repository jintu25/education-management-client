import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className="py-20 text-4xl">{user?.displayName}</h2>
        </div>
    );
};

export default UserProfile;