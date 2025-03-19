import "./Header.css";
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div className="App-Header-Row">
      <div>React Store</div>
       <div>
        <Link to="home">Home</Link>
        <Link to="Cart">Cart</Link>
        <Link to="Login">Login</Link>
       </div>
      
    </div>
  );
}