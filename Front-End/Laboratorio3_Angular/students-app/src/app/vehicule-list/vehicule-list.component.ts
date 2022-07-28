import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  vehicules:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getVehicules();
  }

  getVehicules(){

    this.vehicules = [];//inicializandolo
    this.rest.get_Vehicule().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.vehicules =data;// se enllena el arreglo 
    }); 
  }

  add_Vehicule(){

    this.router.navigate(['/vehicule-add']);
  
  }
  
  
  delete(id_Vehicule:number)
  {
    this.rest.delete_Vehicule(id_Vehicule)
    .subscribe( 
      (data) =>{
        console.log(data);
  
        this.ngOnInit();
  
      })  
  }

}
