import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-vehicule-type-add',
  templateUrl: './vehicule-type-add.component.html',
  styleUrls: ['./vehicule-type-add.component.css']
})
export class VehiculeTypeAddComponent implements OnInit {

  @Input() typeData ={id_type:0,name:''}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addVehiculeType(){

    this.rest.add(this.typeData).subscribe((result) => {
      this.router.navigate(['/vehicule-type-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
