import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";
function UserLogin(){
    const[email, SetUsername] = useState("");
    const[password, SetPassword] = useState("");
    let history=useHistory();


    function handleEmail (value){
        SetUsername(value);
    }

    function handlePassword (value){
        SetPassword(value);
    }

    function handlelogin (){
        getuser("login")
        SetUsername("");
        SetPassword("");
    }

    function handleRegister (){
        getuser("register")
        SetUsername("");
        SetPassword("");
    }


    function getuser(path){
        fetch('/users/'+path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then((res) => res.json())
        .then((result)=>{   
                            localStorage.setItem("currentUser",result.id);history.push("/user")})
                            
        .catch((err)=>{
            localStorage.setItem("currentUser",null);
            if(path=="login")
            alert("Şifre Yanlış, ya da böyle bir kayıt yok!");
            if(path=="register")
            alert("Bu email zaten kayıtlı")
        });
       
    }

    
        return(
                <div class="col-xl-7 col-lg-8 col-sm-9 mx-auto ">
                    <div class="card mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                                <form id="contact-form" role="form">
                                    <div class="justify-content-center">
                                        <div class="row">
                                            <div class="mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_email">E-Posta :</label> 
                                                    <input onChange={(i)=> handleEmail(i.target.value)} id="form_email" type="email" name="email" class="form-control" required placeholder="Yeni kullanıcı oluşturabilir / admin ekranındaki maillere giriş yapabilirsiniz"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_year">Şifre :</label> 
                                                    <input onChange={(i)=> handlePassword(i.target.value)} id="form_year" type="password" name="password" class="form-control" required placeholder="Mevcut olan tüm kullanıcıların şifreleri = 123"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <button onClick={()=>handleRegister()} type="button" class="btn btn-info mb-3">Register</button>
                                            <button onClick={()=>handlelogin()} type="button" class="btn btn-success">Login</button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            
        )
    
}
export default UserLogin