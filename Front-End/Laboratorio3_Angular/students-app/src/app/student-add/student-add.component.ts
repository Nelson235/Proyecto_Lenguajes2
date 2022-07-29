import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  @Input() parkingData ={id:0,name_Parking:'',capacity:0,province:'',district:''}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }


  addParking(){

    this.rest.add(this.parkingData).subscribe((result) => {
      this.router.navigate(['/students']);
    }, (err) => {
      console.log(err);
    });

  }


}
