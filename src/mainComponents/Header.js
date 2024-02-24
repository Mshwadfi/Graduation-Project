import { navLogo } from "../utils/constants";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import {  signOut } from "firebase/auth";
import { useEffect } from 'react';
import { addUser, removeUser } from '../redux/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from "react-redux";



const Header = () => {

    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth)
          .then(() => {
            navigate('/')
          })
          .catch((error) => {
            navigate("/error");
          });
      }
      useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid , email , displayName , photoURL} = user;
            dispatch(addUser({uid: uid , email: email ,
               displayName: displayName, photoURL: photoURL}))
               if (window.location.pathname === '/login') {
                navigate('/browse');
            }
          } else {
            dispatch(removeUser());
            if (window.location.pathname !== '/login') {
                // Redirect to the browse page if the current route is not the login page
                navigate('/');
              }
            console.log(user);
          }
        });

        return () => unsubscribe();
        
      },[])
   


    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={navLogo} alt="navlogo.." className="nav-logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  d-flex justify-content-end w-100 pe-5" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">contact</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">about us</a>
                </li> 
              </ul>
              <div >
                <Link to={'/login'}><button className="btn btn-outline-success" onClick={user && handleSignOut}>{!user? 'Login' : 'LogOut'}</button></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Header;
  