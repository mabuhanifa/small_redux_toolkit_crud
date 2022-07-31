import './App.css';
import { useUsersQuery } from './redux/api/userApi';

function App() {
  const query = `/users`;
  const{data} = useUsersQuery(query);
  console.log(data);
  return (
    <div >
      home
    </div>
  );
}

export default App;
