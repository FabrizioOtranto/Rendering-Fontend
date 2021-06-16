import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService} from '../../services/project.service';
import { UploadService } from '../../services/upload.service'
import { Global } from "../../services/global"
import * as $ from 'jquery'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public project: Project;
  public status: string;
  public save_project: any
  public filesToUpload: Array<File>
  public url: string

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) { 
  this.project = new Project('','','','','','','','','','','',1,[])
  this.status = ''
  this.filesToUpload = []
  this.save_project = ''
  this.url = Global.url
}

  ngOnInit(): void {
    $('#animate').on('click', function(event: JQuery.Event){
    $('#animate').css('fontsize','30px')
    console.log(event)
  })
}

  onSubmit(form:any) {
    // guardar los datos basicos
         this._projectService.saveProject(this.project).subscribe(
           async response => {

             if(response.project){
         
               this.save_project = response.project
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

  fileChangeEvent(fileInput:any){
   this.filesToUpload = <Array<File>>fileInput.target.files
  }
}
