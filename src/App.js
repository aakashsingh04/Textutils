import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toggleMode = () => {
    if(Mode === "light"){
      console.log("light mode");
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Activated", "success");
      console.log(Mode);
    }
    else{
      console.log("dark mode");
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Activated" , "success");
      console.log(Mode);

    } 
  }

  const themeChange = (color) => {
    if (color === 'green') {
      console.log("Green mode");
      document.body.style.backgroundColor = 'green';
      showAlert("Green theme activated", "success");
    }
    else if (color === 'red') {
      console.log("Red mode")
      document.body.style.backgroundColor = 'red';
      showAlert("Red theme activated", "success");
    }
  }  

  const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} themeChange={themeChange}/>
            <TextForm heading="Enter the text..." mode={Mode} showAlert={showAlert} themeChange={themeChange}/>
            <Alert alert={alert}/>
            <Outlet />
          </>
      )},
      {
        path: "/about",
        element: <>
                  <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} themeChange={themeChange}/>
                  <About mode={Mode} />
                  <Alert alert={alert}/>
                </>
      }
    ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
