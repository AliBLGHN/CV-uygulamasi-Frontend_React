import React, {useState, useEffect} from "react";
import Admin from "./Admin";
import {Redirect} from "react-router-dom";
import {useHistory} from "react-router";
function AdminLogin(){
    const[username, setUsername] = useState("admin");
    const[password, SetPassword] = useState("123");
    let history=useHistory();
    
    function checkadmin(event){
        event.preventDefault()
        if(username==event.target.email.value){
            if(password==event.target.password.value)  {
                console.log("true")
                localStorage.setItem("currentAdmin",true);
                history.push("/admin")
                
            }
            else{
                localStorage.setItem("currentAdmin",false)
                alert("Şifre Yanlış");
            }
        }
        else{
            localStorage.setItem("currentAdmin",false)
            alert("Kullanıcı Adı Yanlış");
        }
    }
    
    
        return(
                <div class="col-sm-8 col-md-12 col-xl-9 mx-auto">
                    <div class="card mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                                <form id="contact-form" role="form" onSubmit={checkadmin}>
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-8 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_email">E-Posta :</label> 
                                                    <input id="form_email" type="text" name="email" class="form-control" required placeholder="(admin)"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_year">Şifre :</label> 
                                                    <input id="form_year" type="password" name="password" class="form-control" required placeholder="(123)"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Giriş yap"/> </div>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            
        )
    
}
export default AdminLogin