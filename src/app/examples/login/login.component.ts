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
    public status: string;

    constructor(
        public Authservice: AuthService,
        private router: Router
    ) { 
      this.status = ''
    }

    ngOnInit() {
      
    }

        login(){
            this.Authservice.login(this.user)
            .subscribe(
              (res:any) =>{
                if(res.token){
                localStorage.setItem('token', res.token)
                localStorage.setItem('user',res.user2.user)
                this.router.navigate(['/index'])
                }
              },
              err =>{console.log(err)}
              ) 
              this.status = 'failed'
          }
          
        }
        