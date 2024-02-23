/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const AuthContext = createContext();



export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

    // Component content goes here
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCustLoggedIn, setIsCustLoggedIn] = useState(false);
    const [custEmail, setCustEmail] = useState('');
    const [userEmail, setUserEmail] = useState('');
    // const [token, setToken] = useState(localStorage.getItem('token'));

    //adm login function
    const login = (email, token) => {
      setIsLoggedIn(true);
      setUserEmail(email);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('token', token);
    };

    //cust login
    const Custlogin = (email,token) => {
      setIsCustLoggedIn(true);
      setCustEmail(email);
      localStorage.setItem('isCustLoggedIn', 'true');
      localStorage.setItem('custEmail', email);
      localStorage.setItem('token', token);
    };

       //cust logout function
       const Custlogout = () => {
        setIsCustLoggedIn(false);
        setCustEmail('');
        localStorage.removeItem('isCustLoggedIn');
        localStorage.removeItem('custEmail');
        localStorage.removeItem('token');
        navigate('/');
      };

    //logout function
    const logout = () => {
      setIsLoggedIn(false);
      setUserEmail('');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('token');
      navigate('/');
    };


    useEffect(() => {
      const storedLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const storedCustLoggedIn = localStorage.getItem('isCustLoggedIn') === 'true';
      const storedEmail = localStorage.getItem('userEmail');
      const storedCusEmail = localStorage.getItem('custEmail');
      if (storedLoggedIn) {
        setIsLoggedIn(true);
        setUserEmail(storedEmail);
      }
      if (storedCustLoggedIn) {
        setIsCustLoggedIn(true);
        setCustEmail(storedCusEmail);
      }
    }, []);



    return (
      <AuthContext.Provider value={{ isLoggedIn, userEmail, isCustLoggedIn, custEmail, setIsLoggedIn, setUserEmail, login, logout, Custlogin, Custlogout }}>
        {children}
      </AuthContext.Provider>
    );



  };

  