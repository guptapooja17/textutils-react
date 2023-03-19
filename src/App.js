import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

let App = (props) => {
  // We want to manage the complete project state from the main controller

  const [mode, setMode] = useState('light'); // whether darmode is enabled or not
  const [alert, setAlert] = useState(null);

  // remove all class attach to bg bcz the background color once set cannot be modifies so u need to remove all styles
  const removeAllBgClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
  };

  // Fundtion to enable disable dark mode
  const toggleMode = (cls) => {
    console.log(cls.length);
    removeAllBgClasses();
    if (cls === 'light' || cls === 'dark') {
      if (mode === 'dark') {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('Light mode has been enabled', 'success');
      } else {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert('Dark mode has been enabled', 'success');
      }
    } else {
      document.body.classList.add('bg-' + cls);
    }
  };

  // function to show alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      <NavBar
        title="TextUtils"
        homeText="Home"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      /> 
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert} />
        {/* <AboutUs/> */}
        <Outlet />
      </div>
    </>
  );
};

export default App;
