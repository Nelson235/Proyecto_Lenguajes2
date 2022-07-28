import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.css']
})
export class RateListComponent implements OnInit {

  rates:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getRates();
  }

  getRates(){

    this.rates = [];//inicializandolo
    this.rest.get_Rates().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.rates =data;// se enllena el arreglo 
    }); 
  }

  add(){

    this.router.navigate(['/Rate-add']);
  
  }
  
  
  delete(id:number)
  {
    this.rest.delete_Rate(id)
    .subscribe( 
      (data) =>{
        console.log(data);
  
        this.ngOnInit();
  
      })  
  }

}
