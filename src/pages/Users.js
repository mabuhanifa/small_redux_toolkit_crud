import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUsersQuery } from "../redux/api/userApi";

const Users = () => {
  const query = `/users`;
  const { data } = useUsersQuery(query);
  console.log(data);
  return (
    <div className="flex justify-center mt-20">

      <table className="table-auto  border border-gray-100 rounded">
        <thead className="bg-indigo-700  text-white">
          <tr>
            <th
              scope="col"
              className="p-5 text-center border border-indigo-700"
            >
              Name
            </th>
            <th
              scope="col"
              className="p-5 text-center border border-indigo-700"
            >
              User Name
            </th>
            <th
              scope="col"
              className="p-5 text-center border border-indigo-700"
            >
              Email
            </th>
            <th
              scope="col"
              className="p-5 text-center border border-indigo-700"
            >
              Address
            </th>
            <th
              scope="col"
              className="p-5 text-center border border-indigo-700"
            >
              View
            </th>
            <th
              scope="col"
              className="p-5 text-center border border-indigo-700"
            >
              Edit
            </th>
            <th
              scope="col"
              className="p-5 text-center border border-indigo-700"
            >
              Delete
            </th>
          </tr>
        </thead>
        {data?.map((user) => {
          return (
            <tbody className="">
              <td className="border border-gray-300 p-5 text-center">
                {user.name}
              </td>
              <td className="border border-gray-300 p-5 text-center">
                {user.username}
              </td>
              <td className="border border-gray-300 p-5 text-center">
                {user.email}
              </td>
              <td className="border border-gray-300 p-5 text-center">
                {user.address.city}
              </td>
              <td className="border border-gray-300 p-5 text-center ">
                <div className="flex justify-center text-blue-500 text-xl ">
                  <Link to={`/${user.id}`}>
                    <FiEye />
                  </Link>
                </div>
              </td>
              <td className="p-5 border border-gray-300">
                <div className="flex justify-center text-green-500 text-xl">
                  <Link to="/">
                    <FiEdit />
                  </Link>
                </div>
              </td>
              <td className="p-5 border border-gray-300">
                <div className="flex justify-center text-red-500 text-xl">
                  <Link to="/">
                    <FiTrash2 />
                  </Link>
                </div>
              </td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Users;
