import { useState } from "react";
import axios from "axios";

function CreateUser() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const Inputs = {name, email, number}
    axios
      .post("http://localhost/React-php/Php/users.php", Inputs)
      .then((response) => {
        console.log(`Created new user : ${response.data.name}`);
        setEmail("");
        setName("");
        setNumber("")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  return (
    <>
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit} method="post">
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            const value = e.target.value;
            setName(value);
          }}
        />
        <br />
        <label>Email :</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            const value = e.target.value;
            setEmail(value);
          }}
        />
        <br />
        <label>Phone Number :</label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => {
            const value = e.target.value;
            setNumber(value);
          }}
        />
        <br />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
export default CreateUser;
