import { Component, OnInit } from '@angular/core';
import { FormContact } from '../../models/formContact';
import { FormContactService } from '../../services/formcontact.service';
import { Global } from "../../services/global"


@Component({
  selector: 'app-formcontacts',
  templateUrl: './formcontacts.component.html',
  styleUrls: ['./formcontacts.component.css'],
  providers: [FormContactService]
})
export class FormcontactsComponent implements OnInit {
  public formContact: FormContact;
  public url: string
  
  constructor(
     private _formContactService: FormContactService
    ) { 
      this.url = Global.url;
    }

  ngOnInit(): void {
    this.getFormContacts();
  }

  getFormContacts(){
  	this._formContactService.getFormContacts().subscribe(
  		response => {
  			if(response.formContact){
  				this.formContact = response.formContact;
          
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}
