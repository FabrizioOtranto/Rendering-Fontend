import { Component, OnInit } from '@angular/core';
import { MiniProject } from '../../models/miniproject';
import { MiniprojectService } from '../../services/miniProject.service';
import { Global } from "../../services/global"

@Component({
  selector: 'app-miniprojectadmin',
  templateUrl: './miniprojectadmin.component.html',
  styleUrls: ['./miniprojectadmin.component.css'],
  providers: [MiniprojectService]
})
export class MiniprojectadminComponent implements OnInit {
  public miniProject: MiniProject[];
  public url: string

  constructor(
    private _MiniProjectService: MiniprojectService,
  ) { 
    this.url = Global.url

  }

  ngOnInit(): void {

    this.getMiniProjects()

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