import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  @Input() userData ={id:0,name:'',lastName:'',telephone:'',address:'',email:'',password:'',id_Role:1}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

 
  ngOnInit(): void {
  }

  updateUser(){
    this.rest.update_User(this.route.snapshot.params['id'],this.userData).subscribe((result) => {
      this.router.navigate(['/user-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
