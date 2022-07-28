import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-space-add',
  templateUrl: './space-add.component.html',
  styleUrls: ['./space-add.component.css']
})
export class SpaceAddComponent implements OnInit {

  @Input() spaceData ={id_Space:0,number:0,id_Type:0,status:'',id_vehicule:0,id_Parking:0,check_In:'',id_Rate:0}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addSpace(){
    this.rest.add_Space(this.spaceData).subscribe((result) => {
      this.router.navigate(['/space-list']);
    }, (err) => {
      console.log(err);
    });
  }
}
