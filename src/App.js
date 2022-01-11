import React from "react";
import {BrowserRouter, Switch, Route,Redirect} from "react-router-dom";
import{UserForm} from "./components/User/UserForm";
import Admin from "./components/Admin/Admin";
import AdminLogin from "./components/Admin/AdminLogin";
import UserLogin from "./components/User/UserLogin";
import {Navigation} from "./components/Navigation";

function App() {
 
  
    return (
            
            <BrowserRouter>
                <div class="container-lg">

                    <h1 class="m-3 d-flex justify-content-center">Tein Yazılım A.Ş</h1>
                    <h2 class="m-3 d-flex justify-content-center">CV Oluşturma/Listeleme Uygulaması</h2>
                    <Navigation />

                </div>

                    <Switch>
                        <div class="content">
                            <div class="container-md mt-4 ">
                                <div class="row">
                                    <Route>
                                        
                                    </Route>
                                    <Route exact path="/admin" component={Admin}/>
                                    <Route exact path="/adminlogin" component={AdminLogin}/>
                                    <Route exact path="/user" component={UserForm}/>
                                    <Route exact path="/userlogin" component={UserLogin}/>
                                    
                                </div>
                            </div>
                        </div>
                    </Switch>

                
            </BrowserRouter>
  );

  
}

export default App;
