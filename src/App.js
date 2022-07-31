import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import "./App.css";
import { useUsersQuery } from "./redux/api/userApi";

function App() {
  const query = `/users`;
  const { data } = useUsersQuery(query);
  console.log(data);
  return (
    <div className="flex justify-center mt-20">
      <table class="table-auto min-w-[1200px] border border-gray-100 rounded">
        <thead className="bg-indigo-700  text-white">
          <tr>
            <th className="p-5 text-center">Name</th>
            <th className="p-5 text-center">User Name</th>
            <th className="p-5 text-center">Email</th>
            <th className="p-5 text-center">Address</th>
            <th className="p-5 text-center">View</th>
            <th className="p-5 text-center">Edit</th>
            <th className="p-5 text-center">Delete</th>
          </tr>
        </thead>
        {data?.map((user) => {
          return (
            <tbody>
              <td className="p-5 text-center">{user.name}</td>
              <td className="p-5 text-center">{user.username}</td>
              <td className="p-5 text-center">{user.email}</td>
              <td className="p-5 text-center">{user.address.city}</td>
              <td className="p-5 text-center ">
                <div className="flex justify-center text-blue-500 text-xl ">
                  <FiEye />
                </div>
              </td>
              <td className="p-5 ">
                <div className="flex justify-center text-green-500 text-xl">
                  <FiEdit />
                </div>
              </td>
              <td className="p-5 ">
                <div className="flex justify-center text-red-500 text-xl">
                  <FiTrash2 />
                </div>
              </td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
