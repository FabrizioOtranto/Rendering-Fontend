import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public user ={
        user: '',
        password: ''
      }

    data : Date = new Date();
    focus;
    focus1;

    constructor(
        public Authservice: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
      
    }

        login(){
            this.Authservice.login(this.user)
            .subscribe(
              (res:any) =>{
                localStorage.setItem('token', res.token)
                localStorage.setItem('user',res.user2.user)
              },
              err =>{console.log(err)}
              ) 
            this.router.navigate(['/index'])
          }
          
        }
        

        /*
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
*/