import React, {Component} from "react";


export class UserForm extends Component{

    constructor(props){
        super(props);
        this.state={user:{}}
    }

    componentDidMount(){
        this.refrreshList();
    }

    refrreshList(){
        fetch('/users/'+localStorage.getItem("currentUser"))
        .then(response=> response.json())
        .then(data => {
            this.setState({user:data});
        }    
        );
    }

    kaydet(event){
        event.preventDefault();

        fetch('/users/'+localStorage.getItem("currentUser"),{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                        name:event.target.name.value,
                     surname:event.target.surname.value,
                       email:event.target.email.value,
                       phone:event.target.phone.value,
            graduated_school:event.target.graduated_school.value,
               graduaed_year:event.target.graduaed_year.value,
              oldCompanyName:event.target.oldCompanyName.value,
    oldCompanyExperienceYear:event.target.oldCompanyExperienceYear.value,
   oldCompanyWorkDescription:event.target.oldCompanyWorkDescription.value,
                       about:event.target.about.value,
            })
        })
        .then(
            (result) => {
                alert("Bilgiler Kaydedildi");
            }
        )
    }

    render(){
        const {user}=this.state;

        return(
           
                <div class="col-sm-8 col-md-12 col-xl-9 mx-auto">
                    <div class="card mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="">
                                <form id="contact-form" role="form" onSubmit={this.kaydet}>
                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-2 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_name">Ad :</label> 
                                                    <input id="form_name" type="text" name="name" class="form-control" required defaultValue={user.name}/>
                                                </div>
                                            </div>
                                            <div class="col-md-2 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_lastname">Soyad :</label> 
                                                    <input id="form_lastname" type="text" name="surname" class="form-control" required defaultValue={user.surname}/>
                                                </div>
                                            </div>
                                            <div class="col-md-5 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_email">E-Posta :</label> 
                                                    <input id="form_email" type="email" name="email" class="form-control" required defaultValue={user.email}/>
                                                </div>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_phone">Telefon Numarası :</label> 
                                                    <input id="form_phone" type="phone" name="phone" class="form-control" required defaultValue={user.phone}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_school">Mezun Olunan Üniversite :</label> 
                                                    <input id="form_school" type="text" name="graduated_school" class="form-control" required defaultValue={user.graduated_school}/>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                            <div class="form-group"> 
                                                    <label for="form_year">Mezuniyet Yılı :</label> 
                                                    <input id="form_year" type="text" name="graduaed_year" class="form-control" required defaultValue={user.graduaed_year}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label for="form_message">Kendinizden Bahsedin :</label> 
                                                    <textarea id="form_message" name="about" class="form-control" required rows="4" defaultValue={user.about}/>
                                                </div>
                                            </div><hr class="mt-4"/>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_school">En Son Çalıştığınız Şirket :</label> 
                                                    <input id="form_school" type="text" name="oldCompanyName" class="form-control" required defaultValue={user.oldCompanyName}/>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                            <div class="form-group"> 
                                                    <label for="form_year">Deneyim Yılınız :</label> 
                                                    <input id="form_year" type="text" name="oldCompanyExperienceYear" class="form-control" required defaultValue={user.oldCompanyExperienceYear}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-3">
                                                <div class="form-group"> 
                                                    <label for="form_message">Bu Şirkette Ne Görev Yaptınız :</label> 
                                                    <textarea id="form_message" name="oldCompanyWorkDescription" class="form-control" required rows="4" defaultValue={user.oldCompanyWorkDescription}/>
                                                </div>
                                            </div>
                                            <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Bilgileri Kaydet"/> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>            
            
        )
    }
}