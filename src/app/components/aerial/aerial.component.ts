import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { MiniProject } from 'app/models/miniproject';
import { ProjectService } from '../../services/project.service';
import { MiniprojectService } from '../../services/miniProject.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fade } from '../animations/animations';
import * as AOS from 'aos' 

@Component({
  selector: 'app-aerial',
  templateUrl: './aerial.component.html',
  styleUrls: [],
  providers: [ProjectService, MiniprojectService],
  animations: [
  fade
  ]
})

export class AerialComponent implements OnInit {
  public url: string;
  public project: Project;
  public miniProject: MiniProject;

  constructor(
    private _projectService: ProjectService,
    private _MiniProjectService: MiniprojectService,
  	private _router: Router,
  	private _route: ActivatedRoute,
  ) { 
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
  
      this.getProject(id);
    });

    this.getMiniProjects()

    AOS.init({
      offset:400,
      duration:3000
  });
    
    }
  
  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  getMiniProjects(){
    this._MiniProjectService.getMiniProjects().subscribe(
      response => {
        if(response.miniProject){
          this.miniProject = response.miniProject;
          
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
  