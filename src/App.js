import "./App.css";
import { useUsersQuery } from "./redux/api/userApi";

function App() {
  const query = `/users`;
  const { data } = useUsersQuery(query);
  console.log(data);
  return (
    <div className="flex justify-center mt-20">
      <table class="table-auto min-w-[1000px] border border-gray-100 rounded">
        <thead className="bg-indigo-700  text-white">
          <tr>
            <th className="p-5 text-center">Name</th>
            <th className="p-5 text-center">User Name</th>
            <th className="p-5 text-center">Email</th>
            <th className="p-5 text-center">Address</th>
          </tr>
        </thead>

        {/* <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr> */}
        {data?.map((user) => {
          return (
            <tbody>
              <td className="p-5 text-center">{user.name}</td>
              <td className="p-5 text-center">{user.username}</td>
              <td className="p-5 text-center">{user.email}</td>
              <td className="p-5 text-center">{user.address.city}</td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;
