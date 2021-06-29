import { Component, OnInit } from '@angular/core';
import { MiniProject } from '../../models/miniproject';
import { MiniprojectService } from '../../services/miniProject.service';
import { UploadService } from '../../services/upload.service'
import { Global } from "../../services/global"

@Component({
  selector: 'app-createminiproject',
  templateUrl: './createminiproject.component.html',
  styleUrls: ['./createminiproject.component.css'],
  providers: [MiniprojectService, UploadService]
})
export class CreateminiprojectComponent implements OnInit {
  public miniProject: MiniProject;
  public status: string;
  public save_miniProject: any
  public filesToUpload: Array<File>
  public url: string

  constructor(
    private _miniprojectService: MiniprojectService,
    private _uploadService: UploadService
  ) { 
  this.miniProject = new MiniProject('','','','',1,{})
  this.status = ''
  this.filesToUpload = []
  this.save_miniProject = ''
  this.url = Global.url
  }

  ngOnInit(): void {
  }
  onSubmit(form:any) {

    // guardar los datos basicos
         this._miniprojectService.saveMiniProject(this.miniProject).subscribe(
           async response => {

             if(!response.miniproject){

                if(this.filesToUpload.length >= 1){
                

                this._uploadService.makeFileRequest(Global.url+'upload-images/'+response.miniproject._id, [],this.filesToUpload,'image')
                .then((result:any) =>{

                this.save_miniProject = result.miniproject
                this.status = 'success'

                form.reset()
                })

                }else{
    
                  this.save_miniProject = response.miniproject
                  this.status = 'success'}
     
        }else{
          this.status = 'failed'
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
}

