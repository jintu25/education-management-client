import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useDetailsCourse = () => {
  const { id } = useParams();
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");

  const { data: detailsCourses, isLoading: isLoadingDetailsCourse } = useQuery({
    queryKey: ["detailsCourse", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await fetch(
        `https://dragon-news-server-n2l9xp6ol-jintu45.vercel.app/courses/${id}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch moderator status");
      }
      const data = await response.json();
      return data;
    },
  });

  return [detailsCourses, isLoadingDetailsCourse];
};

export default useDetailsCourse;
