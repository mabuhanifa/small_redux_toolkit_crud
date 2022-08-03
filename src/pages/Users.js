import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUsersQuery } from "../redux/api/userApi";
import Spinner from "./spinner/Spinner";

const Users = () => {
  const url = `/users`;
  const { data, isLoading } = useUsersQuery(url);
  return (
    <div className="min-h-screen min-w-screen bg-[#0b1616] flex justify-center items-center text-gray-200">
      {isLoading && <Spinner />}
      <div>
        <table className="table-auto">
          <thead className="bg-[#252525] border border-gray-700">
            <tr >
              <th scope="col" className="p-5 text-center border border-gray-700">
                Name
              </th>
              <th scope="col" className="p-5 text-center border border-gray-700">
                User Name
              </th>
              <th scope="col" className="p-5 text-center border border-gray-700">
                Email
              </th>
              <th scope="col" className="p-5 text-center border border-gray-700">
                Address
              </th>
              <th scope="col" className="p-5 text-center border border-gray-700">
                View
              </th>
              <th scope="col" className="p-5 text-center border border-gray-700">
                Edit
              </th>
              <th scope="col" className="p-5 text-center border border-gray-700">
                Delete
              </th>
            </tr>
          </thead>
          {data?.map((user) => {
            return (
              <tbody className="">
                <td className="border border-gray-700 p-5 text-center">
                  {user.name}
                </td>
                <td className="border border-gray-700 p-5 text-center">
                  {user.username}
                </td>
                <td className="border border-gray-700 p-5 text-center">
                  {user.email}
                </td>
                <td className="border border-gray-700 p-5 text-center">
                  {user.address.city}
                </td>
                <td className="border border-gray-700 p-5 text-center ">
                  <div className="flex justify-center text-blue-500 text-xl ">
                    <Link to={`/${user.id}`}>
                      <FiEye />
                    </Link>
                  </div>
                </td>
                <td className="p-5 border border-gray-700">
                  <div className="flex justify-center text-green-500 text-xl">
                    <Link to={`/edit/${user.id}`}>
                      <FiEdit />
                    </Link>
                  </div>
                </td>
                <td className="p-5 border border-gray-700">
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
    </div>
  );
};

export default Users;
