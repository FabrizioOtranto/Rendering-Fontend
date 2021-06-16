import { Component, OnInit } from '@angular/core';
import { MiniProject } from '../../models/miniproject';
import { MiniprojectService } from '../../services/miniProject.service';
import { Global } from "../../services/global"
import {Router,ActivatedRoute, Params} from '@angular/router'
import { fade } from '../animations/animations';

@Component({
  selector: 'app-miniprojectsecondview',
  templateUrl: './miniprojectsecondview.component.html',
  styleUrls: ['./miniprojectsecondview.component.css'],
  providers: [MiniprojectService],
  animations: [fade]
})
export class MiniprojectsecondviewComponent implements OnInit {
  public miniProject: MiniProject;
  public url: string

  constructor(
    private _MiniProjectService: MiniprojectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id
      console.log(id)
      this.getMiniProject(id)

    })
  }
  getMiniProject(id:any){
    this._MiniProjectService.getMiniProject(id).subscribe(
        response => {
  
          this.miniProject = response.miniProject;
        },
        error =>{
          console.log(<any>error)
        }
      )
  
      }
    }