import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useModerator = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const { data: isModerator, isLoading: isModeratorLoading } = useQuery({
    queryKey: ["isModerator", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users/moderator/${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch moderator status");
      }

      const jsonData = await res.json(); // Extract JSON data
      return jsonData.moderator; // Return the moderator status
    },
  });
  return [isModerator, isModeratorLoading];
};

export default useModerator;
