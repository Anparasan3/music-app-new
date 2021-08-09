import React, { useState } from 'react';
import './style/LoginPage.css';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import OpenTurf from './source/OpenTurf.png';
import loginData from './loginData.json';



export default function LoginPage(props) {
    let history = useHistory();
    const [loginUser, setLoginUser] = useState("");
    const [loginUserPassword, setLoginUserPassword] = useState("");
    function handleSubmit(){
        let count = 0;
        console.log("username = 111111",loginUser);
        console.log("userPassword = 222222",loginUserPassword);
        loginData.loginData.map((login)=>{
            console.log("username = ",loginUser);
            console.log("userPassword = ",loginUserPassword);
            // if(loginUser == "admin" && loginUserPassword == "Admin@123"){
            //     //alert("this way is correct");
            //     history.push("/musicapp");
            // }
            if((login.username === loginUser || login.mail === loginUser) && login.password === loginUserPassword){
                history.push("/musicapp");
                count += 1;  
            }
            else if(login.id == loginData.loginData.length && count==0){
                alert("Invalid Data");
            }
        })
    }
    const responseGoogle = (response) => {
        console.log(response);
        history.push("/musicapp");
    }
    const responseGoogleFailure = (response) => {
        console.log(response);
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    const componentClicked = (data) => {
        console.warn(data);
    }
     
    return(
        <div className = "form">  
            <h2>OpenTurf Technologies Private Limited</h2>
            <div className="OpenTurf"> <img src={OpenTurf} alt="OpenTurf" /> </div>
            <form onSubmit={ () => handleSubmit()}>
                <div className="googleLogin">
                    <GoogleLogin
                        clientId="323198882223-tfl6vhoaoghpnr6oh7k43hc7un2mermd.apps.googleusercontent.com"
                        buttonText="Login with google"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="googleLoginButton">Login with google</button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleFailure}
                        cookiePolicy={'single_host_origin'}
                        type = "submit"
                        icon="go-google"
                    /> 
                </div>
                <div className="facebookLogin">
                    <FacebookLogin
                        appId="189919476454767"
                        size="small"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook} 
                        render={renderProps => (
                            <button onClick={renderProps.onClick} className="faceBookLoginButton">Login with facebook</button>
                        )}
                        icon="fa-facebook"
                    />
                </div>
                <div className="userName">
                    <label className="lables"> UserName </label> 
                    <input 
                        type = "text"
                        name = "username"
                        className="userNameInput" 
                        pattern="(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Username must contain First leter capital and remaining lower case letter atleast 8 character" 
                        placeholder = "example@gmail.com (or) Example" 
                        required
                        onChange={(event)=> {
                            setLoginUser(event.target.value);
                        }}
                    /> 
                </div>
                <div className="password">
                    <label className="lables"> Password </label> 
                    <input 
                        type = "password"
                        name = "password" 
                        className="userNameInput" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        placeholder = "password"
                        required
                        onChange={(event)=> {
                            setLoginUserPassword(event.target.value);
                        }}
                    /> 
                </div>
                <div className="submitButton">
                    <button type = "submit" className = "btn" >Login</button>
                </div>
                <div>
                    You not have an account?<br/>
                    <a href="http://localhost:3000/create-account">Create account</a>
                </div>
            </form>  
        </div>  
    );

}















// export default class LoginPage extends React.Component{
//     //let history = useHistory();
//     // function musicAppMain(){
//     //     console.log("testing--------");
//     //    //history.push("/musicapp");
//     // }
//     constructor(props) {
//         let history = useHistory();
//         super(props);
//         this.state = {value: ''};
//     }
//     handleSubmit(){
//         // alert('A name was submitted: ' + this.state.value);
//         // event.preventDefault();
//         this.setState({value: "/musicapp"});
//         console.log("testing--------");
//         history.push("/musicapp");
//     }

//     render(){
//         return(
//             <div>
//                 {/* <div class="box">
//                 <form>
//                     <h1>OpenTurf Technologies Private Limited</h1>
//                     <img src={OpenTurf}/>
//                     <h3>Login with your account</h3>
//                     <input type="email" placeholder="Used ID" name="usr" class="emailAndPassword" required/>
//                     <input type="password" placeholder="Password" name="pwd" class="emailAndPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
//                     <input value="Sign In" type="submit" class="btn1"/>
//                 </form>
//                 <br/><br/><br/><br/><br/>
//                 <h3>Not have an account? Create new one</h3>
//                 <a href="#"><div class="btn2">Sign Up</div></a> 
//                 </div>  
//                 <p>Forgot your password?? <u style="color:#f1c40f;">Click Here!</u></p>
//                 <script src="script.js" ></script> */}
//                 <div id = "frm">  
//                     <h1>Login</h1>  
//                     <form name="f1"  onSubmit={this.handleSubmit}>  
//                         <p><label> UserName: </label>  <input type = "text" id ="user" name = "user" required/> </p>  
//                         <p><label> Password: </label>  <input type = "password" id ="pass" name = "pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/></p>  
//                         {/* <p><input type = "submit" id = "btn" value = "Login" /></p>   */}
//                         {/* <button onClick={()=>{history.push("/musicapp")}}>Login</button> */}
//                         <button type = "submit" id = "btn" >Login</button>
//                     </form>  
//                 </div> 
//             </div>
//         );
//     }
// }

    // function checksss(form){
    //     console.log("this is nandu uuuuuuuu", form)
    //     if(form.username.value == "admin" && form.password.value == "Admin@123"){
    //         //window.open('target.html')
    //         console.log("correct")
    //         alert("this way is correct");
    //     }
    //     else{
    //         alert("Error Password or Username");
    //         console.log("not  correct")
    //     }
    // }
      // //onClick={ () => check(this.form)}


          // const loginForm = document.getElementById("login-form");
    // const loginButton = document.getElementById("login-form-submit");
    // loginButton.addEventListener("click", (e) => {
    //     //e.preventDefault();
    //     const username = loginForm.username.value;
    //     const password = loginForm.password.value;

    //     if (username === "user" && password === "web_dev") {
    //         alert("You have successfully logged in.");
    //     } else {
    //         alert("worng datas");
    //     }
    // })
    //onSubmit={ () => handleSubmit()}
