import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { FormContact } from '../../models/formContact';
import { FormContactService } from '../../services/formcontact.service';
import { Global } from "../../services/global"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [FormContactService]
})

export class ProfileComponent implements OnInit {
  public formContact: FormContact;
  public save_formContact: any
  public url: string
  public status: string;

    constructor(
      private _formContactService: FormContactService
    ) { 
      this.formContact = new FormContact('','','','',0,false,false,false,false,false,false,false,false,false,'','')
      this.status = ''
      this.url = Global.url
      this.save_formContact = ''
    }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    onSubmit(form:any) {
      this._formContactService.saveFormContact(this.formContact).subscribe(
        async response => {

          if(!response.formContact){

            this.save_formContact = response.formContact
            
            
            alert('The form has been sent.')
  
        }else{
            alert('There was a problem sending the form.')
            
            
     }
    },
   error =>{
   console.log(<any>error)
 }
 )
}
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
