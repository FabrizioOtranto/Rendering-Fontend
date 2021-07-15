import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [],
  providers: [ProjectService]
})
export class PortfolioComponent implements OnInit {
  public projects: Project[];
  public url: string;

  constructor(
    private _projectService: ProjectService
  ) {
    this.url = Global.url;
    
   }

   ngOnInit(): void {
    this.getProjects();
    
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