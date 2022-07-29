import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-vehicule-add',
  templateUrl: './vehicule-add.component.html',
  styleUrls: ['./vehicule-add.component.css']
})
export class VehiculeAddComponent implements OnInit {

  @Input() vehiculeData ={id:0,license_Plate:'',color:'',brand:'',id_User:0,id_Type:1}
  vehicules:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getVehicules();
  }

  addVehicule(){

    this.rest.add_Vehicule(this.vehiculeData).subscribe((result) => {
      this.router.navigate(['/vehicule-list']);
    }, (err) => {
      console.log(err);
    });

  }

  getVehicules(){

    this.vehicules = [];//inicializandolo
    this.rest.get_Vehicule().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.vehicules =data;// se enllena el arreglo 
    }); 
  }



}
