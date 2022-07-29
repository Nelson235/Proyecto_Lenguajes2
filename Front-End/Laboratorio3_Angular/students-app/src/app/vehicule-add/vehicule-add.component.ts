import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-vehicule-add',
  templateUrl: './vehicule-add.component.html',
  styleUrls: ['./vehicule-add.component.css']
})
export class VehiculeAddComponent implements OnInit {

  @Input() vehiculeData ={id:0,license_Plate:'',color:'',brand:'',id_User:18,id_Type:1}

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addVehicule(){

    this.rest.add_Vehicule(this.vehiculeData).subscribe((result) => {
      this.router.navigate(['/vehicule-list']);
    }, (err) => {
      console.log(err);
    });

  }

}
