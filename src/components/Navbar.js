import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">User List</Link>
        </li>
        <li>
          <Link to="user/create">Create User</Link>
        </li>
      </ul>
    </>
  ); 
}
export default Navbar;