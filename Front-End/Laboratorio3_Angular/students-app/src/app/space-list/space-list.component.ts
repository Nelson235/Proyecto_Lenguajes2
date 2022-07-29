import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-space-list',
  templateUrl: './space-list.component.html',
  styleUrls: ['./space-list.component.css']
})
export class SpaceListComponent implements OnInit {

  spaces:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getSpaces();
  }

  getSpaces(){

    this.spaces = [];//inicializandolo
    this.rest.get_Spaces().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.spaces =data;// se enllena el arreglo 
    }); 
  }


add(){

  this.router.navigate(['/space-add']);

}


delete(id:number)
{
  this.rest.delete_Space(id)
  .subscribe( 
    (data) =>{
      console.log(data);

      this.ngOnInit();

    })  
}

}
