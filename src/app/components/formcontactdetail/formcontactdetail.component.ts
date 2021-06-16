import { Component, OnInit } from '@angular/core';
import { FormContact } from '../../models/formContact';
import { FormContactService } from '../../services/formcontact.service';
import { Global } from "../../services/global"
import {Router,ActivatedRoute, Params} from '@angular/router'


@Component({
  selector: 'app-formcontactdetail',
  templateUrl: './formcontactdetail.component.html',
  styleUrls: ['./formcontactdetail.component.css'],
  providers: [FormContactService]
})
export class FormcontactdetailComponent implements OnInit {
  public url: string
  public formContact: FormContact;
  public confirm: boolean

  constructor(
    private _formContactService: FormContactService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url;
    this.confirm = false
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
  deleteMessage(id:any){
  this._formContactService.deleteFormContact(id).subscribe(
    response =>{
      if(response.project){
        this._router.navigate(['/messages'])
      }
    },
    error => {
      console.log(<any> error)
    }
  )
  }
  }

