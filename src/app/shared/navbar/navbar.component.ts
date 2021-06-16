import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {AuthService} from '../../services/auth.service'
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import * as $ from 'jquery'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    providers: [ProjectService]
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    public projects: Project[];
    public url: string;
    public phone = "5491122761745"
    public title = "Te envie este mensaje desde la api rest de wsp bro";

    constructor(
        public location: Location, private element : ElementRef,
        public AuthService: AuthService,
        private _projectService: ProjectService
        ) {
        this.sidebarVisible = false;
        this.url = Global.url;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = $('.navbar-toggler')
        

        this.getProjects();

        
    }
    sidebarOpen() {
        var toggleButton = $('.navbar-toggler')
        var togglebutton2 = $('.dropdown-menu')
        const html = document.getElementsByTagName('html')[0];
        setTimeout(function(){
            toggleButton.addClass('toggled');
            togglebutton2.addClass('transparency')
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        var toggleButton = $('.navbar-toggler')
        var togglebutton2 = $('.dropdown-menu')
        // console.log(html);
        toggleButton.removeClass('toggled');
        togglebutton2.removeClass('transparency')
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
            
        } else {
            this.sidebarClose();
            
        }
    };
  
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
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
