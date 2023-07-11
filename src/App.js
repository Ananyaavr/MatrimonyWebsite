import { Route,Routes } from "react-router-dom";
import Home from "./homepage/home";
// import Navbar from "./homepage/nav";
import SignInSide from "./loginpage/login";
import SignUp from "./register/register";
function App() {
  return (
      <div className="App">
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<SignInSide/>}/>
          <Route path="/register" element={<SignUp/>}/>
        </Routes> 
      </div>
  );
}

export default App;
