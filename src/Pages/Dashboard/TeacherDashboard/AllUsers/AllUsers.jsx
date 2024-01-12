import { useQuery } from "@tanstack/react-query";
import { FidgetSpinner } from "react-loader-spinner";
import Swal from "sweetalert2";

const AllUsers = () => {
  // const isAdmin = (false);
  const token = localStorage.getItem("access-token");

  const {
    isFetching,
    error,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/users", {
          headers: {
            authorization: `bearer ${token}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
      }
    },
  });

  if (isFetching) {
    return (
      <div className="text-center flex justify-center">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      </div>
    );
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const handleMakeModerator = (user) => {
    fetch(`http://localhost:5000/users/moderator/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Admin make successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to delete this User",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
      {users?.map((user) => (
        <div
          key={user._id}
          className="relative bg-gradient-to-r from-[#051129] via-[#00172b] to-[#00030f] p-6 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 border-t-4 border-blue-500 text-center"
        >
          <div className="text-center">
            <img
              src={user.photoURL}
              alt=""
              className="mx-auto mt-2 rounded-full w-20 h-20 border-2 border-white"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
          <div className="mt-4 flex justify-center space-x-4">
            {user?.role === "moderator" ? (
              <p className="text-sky-500 font-bold">Moderator</p>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-transform transform hover:scale-105"
                onClick={() => handleMakeModerator(user)}
              >
                Make Moderator
              </button>
            )}
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-transform transform hover:scale-105"
              onClick={() => handleDelete(user)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
