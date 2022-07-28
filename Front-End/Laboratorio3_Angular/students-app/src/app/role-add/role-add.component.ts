import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {

  @Input() roleData ={id:0,name:''}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addRole(){

    this.rest.add_Role(this.roleData).subscribe((result) => {
      this.router.navigate(['/role-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
