import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-vehicule-type-list',
  templateUrl: './vehicule-type-list.component.html',
  styleUrls: ['./vehicule-type-list.component.css']
})
export class VehiculeTypeListComponent implements OnInit {

  vehiculesType:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getVehiculesType();

  }


  getVehiculesType(){

    this.vehiculesType = [];//inicializandolo
    this.rest.get_VehiculeType().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.vehiculesType =data;// se enllena el arreglo 
    }); 
  }

  add_VehiculeType(){

    this.router.navigate(['/vehicule-type-add']);
  
  }
  
  
  delete(id_VehiculeType:number)
  {
    this.rest.delete_VehiculeType(id_VehiculeType)
    .subscribe( 
      (data) =>{
        console.log(data);
  
        this.ngOnInit();
  
      })  
  }

}
