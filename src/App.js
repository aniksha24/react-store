
// import './App.css';
// import Footer from './Footer';
// import Main from './Main';
// import Header from './Header'

// function App() {
//   return (
//     <div>
//       <Header/>
//       <Footer/>
//       <Main/>
//       <login/>
//     </div>

//   );
// }

// // export default App;

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>

//   );
// }
// export default App;
// import Header from "./components/Header";
// function App(props) {
//   //let name="John"
//   return (
//     <>
//       <h1>Hello {props.name}. You are {props.age}</h1>
//       <p>This is a paragraph.</p>
//     </>
//   );
// }
// export default App;

import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart"
import Login from "./components/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App(props) {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Products />}/>
        <Route path="home" element={<Products />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="login" element={<Login />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}
export default App;