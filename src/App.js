import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h5>React CRUD App with PHP API And MySQL</h5>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="user/create" element={<CreateUser />} />
        <Route path="user/:id/edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
