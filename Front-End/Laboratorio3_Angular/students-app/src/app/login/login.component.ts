import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userData = {name:'', password:''};
  user:any;

  constructor(public rest: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  getUser(){
    this.user  = '';
    this.rest.getUser(this.userData.name).subscribe((data:{}) => {
        console.log(data);
        this.user = data;
        this.isValidUser();
    });
  }

  isValidUser(){
    if (typeof(this.user) !== 'undefined') {

      if(this.user.password==this.userData.password){
        switch (this.user.idRole) {
          case 1:
            this.adminPrincipal();
            break;
          case 2:
            this.assistantPrincipal();
            break;
          case 3:
              this.clientPrincipal();
              break;
          default:
            break;
        }
    }
   
  }
}

  adminPrincipal(){
    this.router.navigate(['/user-list']);
  }

  assistantPrincipal(){
    this.router.navigate(['/user-list']);
  }

  clientPrincipal(){
    this.router.navigate(['/user-list']);
  }

}