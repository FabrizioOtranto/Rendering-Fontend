import { Component, OnInit } from '@angular/core';
import { MiniProject } from '../../models/miniproject';
import { MiniprojectService } from '../../services/miniProject.service';
import { UploadService } from '../../services/upload.service'
import { Global } from "../../services/global"
import {Router,ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-editminiproject',
  templateUrl: './editminiproject.component.html',
  styleUrls: ['./editminiproject.component.css'],
  providers: [MiniprojectService, UploadService]
})
export class EditminiprojectComponent implements OnInit {
  public miniProject: MiniProject;
  public status: string;
  public save_miniProject: any
  public filesToUpload: Array<File>
  public url: string
  public confirm: boolean

  constructor(
    private _miniprojectService: MiniprojectService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.miniProject = new MiniProject('','','','',0,{})
    this.status = ''
    this.filesToUpload = []
    this.save_miniProject = ''
    this.url = Global.url
    this.confirm = false
    }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id
      
      this.getMiniProject(id)
    })
  }

    getMiniProject(id:any){
      this._miniprojectService.getMiniProject(id).subscribe(
        response => {
  
          this.miniProject = response.miniProject;
          
        },
        error =>{
          console.log(<any>error)
        }
      )
    }

     onSubmit (form:any) {
       this._miniprojectService.updateMiniProject(this.miniProject).subscribe(
        async response => {
               
  
               if(response.miniProject){
                
                if(this.filesToUpload.length >= 1){
                  await this._uploadService.makeFileRequest(Global.url+'uploadminiprojectimage/'+ response.miniProject._id  , [],this.filesToUpload,'image')
                  .then((result:any) =>{
  
                  this.save_miniProject = result.MiniProject
                  console.log(result.MiniProject)
                  this.status = 'success'
                  })
  
                  }else{
      
                    this.save_miniProject = response.miniproject
                    this.status = 'success'}     
       
          }else{
            this.status = 'failed'
            console.log(response.miniproject)
          }
        },
        error =>{
        console.log(<any>error)
      }
      )
    }
  
    fileChangeEvent(fileInput:any){
     this.filesToUpload = <Array<File>>fileInput.target.files
     
    }

  setConfirm(confirm:boolean){
  
    this.confirm = confirm
  }
  
  deleteMiniProject(id:any){
  this._miniprojectService.deleteMiniProject(id).subscribe(
    response =>{
      if(response.miniproject){

        this._router.navigate(['/projects/miniproject'])
      }
  
    },
    error => {
      console.log(<any> error)
    }
  
  )
  
  }

  removeImage(form:any){
    // guardar los datos basicos
    this._miniprojectService.removeImage(this.miniProject).subscribe(
      response => {
  
        if(response.miniProject){
          console.log()

          this.save_miniProject = response.miniproject
                    this.status = 'success'   
  
        }else{
          this.status = 'failed'
        }
      },
      error =>{
      console.log(<any>error)
    }
    )
  }
  
  }
  