import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-vehicule-type-details',
  templateUrl: './vehicule-type-details.component.html',
  styleUrls: ['./vehicule-type-details.component.css']
})
export class VehiculeTypeDetailsComponent implements OnInit {

  vehiculeType:any;
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getById_VehiculeType(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.vehiculeType = data;
    });
  }

}
