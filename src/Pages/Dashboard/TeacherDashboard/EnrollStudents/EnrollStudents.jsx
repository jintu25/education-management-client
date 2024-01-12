import { useEffect, useState } from "react";

const EnrollStudents = () => {
  const [enrollStudents, setEnrollStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/payment")
      .then((res) => res.json())
      .then((data) => {
        setEnrollStudents(data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-[#333] text-3xl lg:text-4xl mb-4">Enroll Students</h3>
      <div className="overflow-x-auto">
        <section className="mx-auto font-mono">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="text-sm lg:text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-2 lg:px-4 py-2 lg:py-3 ">Name</th>
                  <th className="px-2 lg:px-4 py-2 lg:py-3 ">process</th>
                  <th className="px-2 lg:px-4 py-2 lg:py-3 ">Status</th>
                  <th className="px-2 lg:px-4 py-2 lg:py-3 ">E-mail</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {enrollStudents.map((students) => (
                  <tr key={students._key}>
                    <td className="px-2 lg:px-4 py-2 lg:py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                          <img
                            className="object-cover w-full h-full"
                            src={students?.image}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-black">
                            {students?.name ? (
                              <span>{students?.name}</span>
                            ) : (
                              "unknown"
                            )}
                          </p>
                          <p className="text-xs text-gray-600">
                            {students?.courseName}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 lg:px-4 py-2 lg:py-3 border">
                      {students?.process}
                    </td>
                    <td className="px-2 lg:px-4 py-2 lg:py-3 border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {students?.status}
                      </span>
                    </td>
                    <td className="px-2 lg:px-4 py-2 lg:py-3 border">
                      {students?.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table> 
          </div>
        </section>
      </div>
    </div>
  );
};

export default EnrollStudents;
