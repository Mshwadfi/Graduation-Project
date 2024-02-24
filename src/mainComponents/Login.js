import Header from "./Header";
import { useRef, useState } from "react";
import validation from '../utils/validation';
import { createUserWithEmailAndPassword,updateProfile ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import Footer from "./Footer";

const Login = () =>{
    const [message, setMessage] = useState(null); 
    const [signUp , setSignUp] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState('student');
    const email = useRef(null);
    const password = useRef(null);
    // const name = useRef(null);
    const dispatch = useDispatch();
    const handleLogIn = (event) => {
        setMessage(validation(email.current.value , password.current.value))
        if(message) return;

        if(signUp){
            //sign up logic


            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: "photo",
                    
                  }).then(() => {
                    const {uid , email , displayName , photoURL} = auth.currentUser;
                    dispatch(addUser({uid: uid , email: email ,
                       displayName: displayName, photoURL: photoURL}))
                  }).catch((error) => {
                    setMessage(error.message )
                  });
                
                navigate('/browse');
                console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setMessage(errorCode +", "+ errorMessage)
                
            });
        }else{
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');
                
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setMessage("User Not Found!")
            });
        }
        
    }
    const toggleForm = ()=>{
        setSignUp(!signUp);
    }
   
    return(
        <>
            <Header />
           
            <div className="signup-popup">
                
                <form className="signup-popup-form" onSubmit={(e) =>{e.preventDefault()}}>
                    {/* <h1 className="signup-form-header">Sign Up</h1> */}
                    <div className="signup-fullname-inputs">
                        {signUp && <input type="text" placeholder="First Name" className="signup-firstname-input" name="firstname"  required/>}
                        {signUp && <input type="text" placeholder="Last Name" className="signup-lastname-input" name="lastname" required/>}
                       
                    </div>
                    {signUp && <input type="text" placeholder="User Name" className="signup-username-input" name="username"required/>}
                    <input type="email" name="email" placeholder="Email" className="signup-email-input" ref={email} required/>
                    <input type="password" name="password" className="signup-password-input" placeholder="Password" ref={password} required/>
                    {signUp && <input type="password" name="confirmpassword" className="signup-confirmpassword-input" placeholder="Confirm Password" required/>}
                    {signUp && <select name="user-type" className="signup-user-type-select" value={name} onChange={(e) => setName(e.target.value)} required >
                        <option value="admin">Instructor</option>
                        <option value="assistant">Assistant</option>
                        <option value="student">Student</option>
                    </select>}
                    <p>{message}</p>
                    <button className="loginButton" onClick={handleLogIn}>Sign {signUp? "Up" : "In"}</button>
                    <p className="formToggle">
                        {signUp ? (
                            <>Already Have An Account? <span onClick={toggleForm}>Sign In</span></>
                        ) : (
                            <>New User? <span onClick={toggleForm}>SignUp Now.</span></>
                        )}
                    </p>



                </form>
            </div>
        </>
        
    );
}

export default Login;
