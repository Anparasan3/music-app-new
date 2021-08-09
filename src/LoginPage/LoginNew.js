import React, { useState } from 'react';
import './LoginNew.css';
import { useHistory } from 'react-router-dom';
import loginData from './loginData.json';
import Google from './Components/Google';
import Facebook from './Components/Facebook';



export default function Login() {
    let history = useHistory();
    const [currentPage, setCurrentPage] = useState("false");
    const [loginUser, setLoginUser] = useState("");
    const [loginUserPassword, setLoginUserPassword] = useState("");

    function handleSubmit(){
        let count = 0;
        loginData.loginData.map((login)=>{
            console.log("username = ",loginUser);
            console.log("userPassword = ",loginUserPassword);
            if((login.username === loginUser || login.mail === loginUser) && login.password === loginUserPassword){
                history.push("/musicapp");
                count += 1;  
            }
            else if(login.id == loginData.loginData.length && count==0){
                alert("Invalid Data");
            }
        })
    }
    if(currentPage === "true"){
        history.push("/musicapp");
    }
    return(
        <div className="container">
            <div className="container-content">
                <div class="card-header">
                    <h3>Sign In</h3>
                    <div className="signInIcons">
                        <span>
                            <Facebook currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </span>
                        <span>
                            <Google currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        </span>
                        <span><i class="fab fa-github-square"/></span>
                        <span><i class="fab fa-twitter-square"/></span>
                    </div>
                </div>
                <div className="cardBody">
                    <form onSubmit={ () => handleSubmit()}>
                        <div className="UserNameInput">                        
                            <span className="UserNameInput-span"><i class="fas fa-user"/></span>
                            <input 
                                type="text" 
                                placeholder="username" 
                                className="UserNameInputinput"
                                pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="First letter must contain captital"
                                required
                                onChange={(event)=> {
                                    setLoginUser(event.target.value);
                                }}
                            />
                        </div>
                        <div className="UserPasswordInput">                           
                            <span className="UserNameInput-span"><i class="fas fa-key"></i></span>
                            <input 
                                type="password" 
                                className="UserNameInputinput" 
                                placeholder="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                required
                                onChange={(event)=> {
                                    setLoginUserPassword(event.target.value);
                                }}
                            />
                        </div>
                        <div className="CheckBox">
                            <input type="checkbox"/>Remember Me
                        </div>
                        <div className="Submit">
                            <button type="submit" className="SubmitButton">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="cardFooter">
                    <div class="Footer-Text">
                        Don't have an account?<a href="#" className="SignUpButton">Sign Up</a>
                    </div>
                    <div className="Footer-text2">
                        <a href="#" className="SignUpButton">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}












//   <div class="d-flex justify-content-center h-100">
//                 <div class="card">
//                     <div class="card-header">
//                         <h3>Sign In</h3>
//                         <div class="d-flex justify-content-end social_icon">
//                             <span><i class="fab fa-facebook-square"></i></span>
//                             <span><i class="fab fa-google-plus-square"></i></span>
//                             <span><i class="fab fa-twitter-square"></i></span>
//                         </div>
//                     </div>
//                     <div class="card-body">
//                         <form>
//                             <div class="input-group form-group">
//                                 <div class="input-group-prepend">
//                                     <span class="input-group-text"><i class="fas fa-user"></i></span>
//                                 </div>
//                                 <input type="text" class="form-control" placeholder="username"/>
                                
//                             </div>
//                             <div class="input-group form-group">
//                                 <div class="input-group-prepend">
//                                     <span class="input-group-text"><i class="fas fa-key"></i></span>
//                                 </div>
//                                 <input type="password" class="form-control" placeholder="password"/>
//                             </div>
//                             <div class="row align-items-center remember">
//                                 <input type="checkbox"/>Remember Me
//                             </div>
//                             <div class="form-group">
//                                 <input type="submit" value="Login" class="btn float-right login_btn"/>
//                             </div>
//                         </form>
//                     </div>
//                     <div class="card-footer">
//                         <div class="d-flex justify-content-center links">
//                             Don't have an account?<a href="#">Sign Up</a>
//                         </div>
//                         <div class="d-flex justify-content-center">
//                             <a href="#">Forgot your password?</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>