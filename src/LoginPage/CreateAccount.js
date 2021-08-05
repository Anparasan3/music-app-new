import React, { useState} from 'react';
import './style/CreateAccount.css';
import { useHistory } from 'react-router-dom';



export default function LoginPage() {
    let history = useHistory();  

    const [cerateName, setCreateName] = useState("");
    const [ceratePassword, setCreatePassword] = useState("");
    const [cerateconformPassword, setCreateConformPassword] = useState("");

    function CreateAccount(){
        localStorage.setItem({cerateName}, {ceratePassword});
        const cat = localStorage.getItem({cerateName});
        console.log(cat);
        alert("its ok {cat}");
    }
    return( 
        <form className = "create-account-container" onSubmit={ () => CreateAccount()}>
            <div className="create-firstName">
                <label className="create-lable">First Name</label><br/>
                <input 
                    placeholder="First Name" 
                    className="input"
                    required
                    onChange={(event)=> {
                        setCreateName(event.target.value);
                    }}
                />
            </div>
            <div className="create-lastName">
                <label className="create-lable">Last Name</label><br/>
                <input placeholder="Last Name" className="input"></input>
            </div>
            <div className="create-dataOfBorth">
                <label className="create-lable">Date of Birth</label><br/>
                <input placeholder="date/month/year" className="input"></input>
            </div>
            <div className="create-mailId">
                <label className="create-lable"> Mail ID</label><br/>
                <input placeholder="example@gmail.com" className="input"></input>
            </div>
            <div className="create-password">
                <label className="create-lable">Password</label><br/>
                <input 
                    placeholder="Password" 
                    className="input"
                    required
                    onChange={(event)=> {
                        setCreatePassword(event.target.value);
                    }}
                />
            </div>
            <div className="create-conformPassword">
                <label className="create-lable">Conform Password</label><br/>
                <input 
                    placeholder="Password" 
                    className="input"
                    required
                    onChange={(event)=> {
                        setCreateConformPassword(event.target.value);
                    }}
                />
            </div>
            <div className="create-button-submit">
                <button className="create-button" type="submit"> submit </button>
            </div>
        </form>  
    );

}