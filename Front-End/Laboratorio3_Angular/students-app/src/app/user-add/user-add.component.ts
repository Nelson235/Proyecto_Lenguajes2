import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Input() userData ={id:0,name:'',lastName:'',telephone:'',address:'',email:'',password:'',id_Role:1}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(){

    this.rest.add_User(this.userData).subscribe((result) => {
      this.router.navigate(['/user-list']);
    }, (err) => {
      console.log(err);
    });

  }

}
