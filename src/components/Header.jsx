import "./Header.css";
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div className="App-Header-Row">
      <div>
        <h1>React Store</h1>
        </div>
       <div>
        <h4><Link to="home">Home</Link></h4>
        <h4><Link to="cart">Cart</Link></h4>
        <h4><Link to="login">Login</Link></h4>
       </div>
      
    </div>
  );
}