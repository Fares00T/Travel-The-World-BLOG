import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/login";
import Register from "./pages/Register/Register";
import Settings from "./pages/settings/settings";
import Home from "./pages/Home/Home";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "./App.css";

function App() {
  const { user } = useContext(Context);
  return (
    <div className='app'>
      <Router>
        <Navbar className='phone' />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/Register'
            element={user ? <Home /> : <Register />}
          />
          <Route exact path='/Login' element={user ? <Home /> : <Login />} />
          <Route
            exact
            path='/Write'
            element={user ? <Write /> : <Register />}
          />
          <Route
            exact
            path='/Settings'
            element={user ? <Settings /> : <Register />}
          />
          <Route exact path='/post/:postId' element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
