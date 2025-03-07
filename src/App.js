
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
function App(props) {
  return (
    <div>
      <Header />
      <Products />
      <Footer/>
    </div>
  );
}
export default App;