import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUsersQuery } from "../redux/api/userApi";
import Spinner from "./spinner/Spinner";

const Users = () => {
  const url = `/users`;
  const { data, isLoading } = useUsersQuery(url);
  return (
    <>
      {isLoading && <Spinner />}
      <div className="flex justify-center mt-20">
        <table className="table-auto  border border-gray-100 rounded">
          <thead className="bg-gray-900 border border-indigo-700 text-white">
            <tr>
              <th scope="col" className="p-5 text-center ">
                Name
              </th>
              <th scope="col" className="p-5 text-center">
                User Name
              </th>
              <th scope="col" className="p-5 text-center">
                Email
              </th>
              <th scope="col" className="p-5 text-center">
                Address
              </th>
              <th scope="col" className="p-5 text-center">
                View
              </th>
              <th scope="col" className="p-5 text-center">
                Edit
              </th>
              <th scope="col" className="p-5 text-center">
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
                    <Link to={`/edit/${user.id}`}>
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
    </>
  );
};

export default Users;
