import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as AOS from 'aos' 



@Component({
  selector: 'app-video3-d',
  templateUrl: './video3-d.component.html',
  styleUrls: ['./video3-d.component.css'],
  providers: [ProjectService],
})
export class Video3DComponent implements OnInit {

  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
  	private _router: Router,
  	private _route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private ref: ChangeDetectorRef

  ) { 
    this.url = Global.url;
  }
  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params.id;
  
      this.getProject(id);
    });
    
    AOS.init({
      offset:400,
      duration:1500
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
  
  getVideoIframe(url) {
    var video, results;
 
    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];
 
    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);   
}

ngAfterViewInit() {
  this.ref.detach()
}

  }