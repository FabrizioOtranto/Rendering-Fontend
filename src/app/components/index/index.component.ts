import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as AOS from 'aos'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ProjectService]
})
export class IndexComponent implements OnInit {

  public url: string;
  public projects: Project[];

  constructor(
    private _projectService: ProjectService,
  	private _router: Router,
  	private _route: ActivatedRoute,
    
  ) {  this.url = Global.url;
    
    
  }

  ngOnInit(): void {
    this.getProjects();
    AOS.init({
      offset:400,
      duration:3000
  });
    
  }

  getProjects(){
  	this._projectService.getProjects().subscribe(
  		response => {
  			if(response.projects){
  				this.projects = response.projects;
          
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}