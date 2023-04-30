import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import App from "./components/App"

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("root")
)
// //Step 1\. Import react-router functions
// //Add NavLink to import
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

// //Add basic styling for NavLinks
// const linkStyles = {
//   display: "inline-block",
//   width: "50px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// }

// //define the NavBar component

// function NavBar () {
//   return (
//     <div>
//       <NavLink
//       to="/"
//       //set exact so it knows to only set activelyStyle when route is deeply equal to link
//       exact
//       //add styling to Navlink
//       style={linkStyles}
//       //add prop for activeStyle
//       activeStyle={{
//         backgroun: "darkblue",
//       }}
//       >
//         Home
//       </NavLink>
//       <NavLink
//       to="/about"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         About
//       </NavLink>
//       <NavLink
//       to="/messages"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         Messages
//       </NavLink>
//       <NavLink
//       to="/login"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         Login
//       </NavLink>
//       <NavLink
//       to="/signup"
//       exact
//       style={linkStyles}
//       activeStyle={{
//         background: "darkblue",
//       }}
//       >
//         SignUp
//       </NavLink>
//     </div>

//   )
// }


// function Home() {
//   return <h1>Home!</h1>
  
// }

// function About() {
//   return <h1>This is my about component!</h1>
// }

// function Messages() {
//   return <h1>Messages fall here</h1>
// }

// function Login() {
//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
// }
// function SignUp () {
//   return (
//     <div>
//       <h1>SignUp</h1>
//       <form>
//       <div>
//       <input type="text" name="username" placeholder="Username"/>
//       </div>
//       <div>
//         <input type="password" name="password" placeholder="Password" />
//       </div>
//       <div>
//         <input type="text" name="ConfirmPass" placeholder="Confirm Password" />
//       </div>
//       <input type="submit" value="Submit" />
//       </form>
//     </div>
//   )
// }





// //Step 2\. Chnage so router is coordinationg what is displayed
// //Add the NavBar component to our render method
// ReactDOM.render(
//   <BrowserRouter>
//   <NavBar />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/messages" element={<Messages />} />
//     <Route path="/login" element={<Login />} />
//     <Route path="/signup" element={<SignUp />} />
//   </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );





// // function App() {
// //   return <Home />;
// // }

// // ReactDOM.render(<App />, document.getElementById("root"));
