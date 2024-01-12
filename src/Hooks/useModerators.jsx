// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProviders";

// const useModerators = () => {
//     const { user, loading } = useContext(AuthContext);
//     console.log(user.email)
//     const token = localStorage.getItem("access-token");

//     const {
//       data: isModerator,
//       isLoading: isModeratorLoading,
//       error,
//     } = useQuery({
//       queryKey: ["isModerator", user?.email],
//       enabled: !loading,
//       queryFn: async () => {
//         try {
//           const res = await fetch(
//             `http://localhost:5000/users/moderator/${user?.email}`,
//             {
//               headers: {
//                 authorization: `bearer ${token}`,
//               },
//             }
//           );

//           if (!res.ok) {
//             if (res.status === 403) {
//               // Handle 403 Forbidden - User is not a moderator
//               console.log("User is not a moderator");
//               return false;
//             } else {
//               throw new Error(
//                 `Failed to fetch moderator status: ${res.status} ${res.statusText}`
//               );
//             }
//           }

//           const data = await res.json();
//           console.log(data);
//           return data.moderator;
//         } catch (error) {
//           console.error("Error fetching moderator status:", error);
//           throw error; // Rethrow the error to be caught by the query hook
//         }
//       },
//     });

//     return [isModerator, isModeratorLoading, error];
// }
// export default useModerators;

//   const {
//     data: isModerator,
//     isLoading: isModeratorLoading,
//     error,
//   } = useQuery({
//     queryKey: ["isModerator", user?.email],
//     enabled: !loading && !user,
//     queryFn: async () => {
//       const response = await fetch(
//         `http://localhost:5000/users/moderator/${user?.email}`,
//         {
//           headers: {
//             authorization: `bearer ${token}`,
//           },
//         }
//       );
//       // if (!response.ok) {
//       //   throw new Error("Failed to fetch moderator status");
//       // }
//       // const data = await response.json();
//       // console.log("moderator is ", data)
//       console.log(response);
//       return response.data.moderator;
//     },
//   });

//   return [isModerator, isModeratorLoading, error];
// };
