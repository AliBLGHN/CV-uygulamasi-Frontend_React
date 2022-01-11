import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useHistory} from "react-router";
import AdminLogin from "./AdminLogin";

function Admin(){
    const[error, setError] = useState(null);
    const[isLoaded, setIsLoaded] = useState(false);
    const[users, setUsers] = useState([]);
    let history = useHistory();

    useEffect(() => {
        getusers();
      }, [])

      
    function getusers(){
        fetch("/users")
        .then(res=> res.json())
        .then(
            (result)=>{
                console.log(result);
                setIsLoaded(true);
                setUsers(result)
            },
            (error) =>{
                setIsLoaded(true);
                setError(error);
            }
        )
    }

    function sil(event){
        event.preventDefault()
        fetch('/users/'+event.target.id.value, { method: 'DELETE' })
        .then(
            (result) => {
                alert("Silme Başarılı");
                getusers()
            }
        )
    }
    
        if(error){
            return <div>Error </div>
        }else if(!isLoaded){
            return <div>Loading.. </div>
        }else{
            return(
                
                users.map(user=>(
                    <div class="col-md-6 col-xl-4" >
                <div class="text-right card-box">
                    <div class="member-card pt-2 pb-2">
                        <div>
                            <h3>{user.name} {user.surname}</h3> 
                            <span class="text-muted">{user.graduated_school} ({user.graduaed_year})</span>
                            
                            <p class="text-muted">{user.phone} <span>| </span><span class="text-muted"><a href="#" class="text-pink">{user.email}</a></span></p>
                                <div style={{height: "450px",overflow:"auto"}}>
                                    <h5 class="card-title">Hakkında :</h5>
                                    <p class="card-text">{user.about}</p><hr/>
    
                                    <h5 class="card-title">Son iş deneyimi :</h5>
                                    <p class="card-text">{user.oldCompanyName} <spawn class="text-muted">({user.oldCompanyExperienceYear} yıl)</spawn></p>
                                    <p class="card-text">{user.oldCompanyWorkDescription}</p>
                                </div>
                                <form id="contact-form" role="form" onSubmit={sil}>
                                        <input style={{display: "none"}} id="form_name" type="text" name="id" class="form-control" display={"none"} required value={user.id}/>
                                        <div class="col-md-12 mt-3"> <input type="submit" class="btn btn-danger btn-send pt-2 btn-block " value="Sil"/> </div>
                                    </form>
                        </div>
                    </div>
                </div>
            </div>
                ))
                
            )
        }
    
}
export default Admin