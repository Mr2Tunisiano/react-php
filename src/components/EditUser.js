import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const id = useParams().id
  const [user, setUser] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost/React-php/Php/users.php`)
      .then((response) => setUser(response.data));
  }, [])
  for (let i = 0; i < user.length; i++) {
    if (user[i].id === id) {
      setUser(user[i]);
    }
  }
    const handleUpdate = (user) => {
      axios
        .put(`http://localhost/React-php/Php/users.php`, {
          id: user.id,
          name: user.name,
          mobile: user.mobile,
          email: user.email
        })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    };
  return (
    <>
      <h1>Edit User</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(user)
      }}>
        <label>Name : </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
        />
        <br />
        <label>Email : </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
        />
        <br />
        <label>Number : </label>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          value={user.mobile}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  ); 
}
export default EditUser
