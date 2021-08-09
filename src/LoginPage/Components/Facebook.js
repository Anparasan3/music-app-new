import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
 


export default function Google(props){
    const responseFacebook = (response) => {
        console.log(response);
        props.setCurrentPage("true");
    }
    const componentClicked = (data) => console.warn(data);
    
    const faceBookFailure = () => console.log("Facebook login failure");
    return(
        <div>
            <FacebookLogin
                appId="189919476454767"
                autoLoad={false}
                // onClick={componentClicked}
                callback={responseFacebook} 
                onFailure={faceBookFailure}
                render={renderProps => (
                    <i onClick={renderProps.onClick} class="fab fa-facebook-square"></i>
                )}
                icon="fa-facebook"
            />
        </div>
    );
}  
