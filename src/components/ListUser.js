import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/React-php/Php/users.php")
      .then((response) => setData(response.data));
  }, []);
  function HandleDelete(item) {
    axios
      .delete(`http://localhost/React-php/Php/users.php?id=${item.id}`)
      .then((response) => {
        console.log(response);
        const newData = data.filter((i) => i.id !== item.id);
        setData(newData);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <h1>User List</h1>
      <table border={1} align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Created at</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((line) => {
            return (
              <tr key={line.id}>
                <td>{line.id}</td>
                <td>{line.name}</td>
                <td>{line.email}</td>
                <td>{line.mobile}</td>
                <td>{line.created_at}</td>
                <td>
                  <button onClick={() => HandleDelete(line)}>Delete</button>
                </td>
                <td>
                  <Link to={`user/${line.id}/edit`}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ListUser;
