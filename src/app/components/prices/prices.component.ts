import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { fade } from '../animations/animations';
import * as AOS from 'aos'


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: [],
  providers: [ProjectService],
  animations: [fade]
})
export class PricesComponent implements OnInit {
  public projects: Project[];
  public url: string;


  constructor(
    private _projectService: ProjectService
  ) {
    this.url = Global.url;
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

