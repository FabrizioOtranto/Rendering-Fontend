import { Component, OnInit } from '@angular/core';
import { FormContact } from '../../models/formContact';
import { FormContactService } from '../../services/formcontact.service';
import { Global } from "../../services/global"
import {Router,ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-formcontactedit',
  templateUrl: './formcontactedit.component.html',
  styleUrls: [],
  providers: [FormContactService]
})
export class FormcontacteditComponent implements OnInit {
  public url: string
  public formContact: FormContact;
  public confirm: boolean
  public save_formContact: any
  public status: string;

  constructor(
    private _formContactService: FormContactService,
    private _router: Router,
    private _route: ActivatedRoute

  ) { 
    this.formContact = new FormContact('','','','',0,false,false,false,false,false,false,false,false,false,'','')
    this.status = ''
    this.url = Global.url
    this.save_formContact = ''
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id
      console.log(id)
      this.getFormContact(id)

    })
  }

  getFormContact(id:any){
    this._formContactService.getFormContact(id).subscribe(
      response => {

        this.formContact = response.formContact;
      },
      error =>{
        console.log(<any>error)
      }
    )

  }

  setConfirm(confirm:boolean){
  
    this.confirm = confirm
    
  }

onSubmit(form:any) {
  this._formContactService.updateFormContact(this.formContact).subscribe(
    async response => {

      if(response.formContact){

        this.save_formContact = response.formContact
        
        
        alert('The form has been edited.')

    }else{
        alert('There was a problem editing the form.')
        
 }
},
error =>{
console.log(<any>error)
}
)
}
}