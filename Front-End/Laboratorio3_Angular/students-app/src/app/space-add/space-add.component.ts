import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-space-add',
  templateUrl: './space-add.component.html',
  styleUrls: ['./space-add.component.css']
})
export class SpaceAddComponent implements OnInit {

  @Input() spaceData ={id:0,number:0,id_Type:1,status:'',id_Vehicule:21,id_Parking:51,check_In:'',id_Rate:1}
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
