import React from 'react';
import GoogleLogin from 'react-google-login';


export default function Google(props){
    const responseGoogle = (response) => {
        console.log(response);
        props.setCurrentPage("true");
    }
    const responseGoogleFailure = (response) => {
        console.log(response);
    }
    return(
        <div>
            <GoogleLogin
                clientId="323198882223-tfl6vhoaoghpnr6oh7k43hc7un2mermd.apps.googleusercontent.com"
                buttonText=""
                render={renderProps => (
                    <i onClick={renderProps.onClick} disabled={renderProps.disabled} className="fab fa-google-plus-square"></i>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogleFailure}
                cookiePolicy={'single_host_origin'}
            /> 
        </div>
    );
}  
