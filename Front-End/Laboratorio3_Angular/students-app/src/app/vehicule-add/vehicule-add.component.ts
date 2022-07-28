import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-vehicule-add',
  templateUrl: './vehicule-add.component.html',
  styleUrls: ['./vehicule-add.component.css']
})
export class VehiculeAddComponent implements OnInit {

  @Input() vehiculeData ={id_vehicule:0,license_plate:'',color:'',brand:'',Id_User:0,Id_Type:0}

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addVehicule(){

    this.rest.add_Vehicule(this.vehiculeData).subscribe((result) => {
      this.router.navigate(['/user-list']);
    }, (err) => {
      console.log(err);
    });

  }

}
