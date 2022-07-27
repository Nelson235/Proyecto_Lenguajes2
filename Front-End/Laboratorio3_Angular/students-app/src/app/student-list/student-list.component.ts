import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  parkings:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getStudents();
  }

  getStudents(){

    this.parkings = [];//inicializandolo
    this.rest.get().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.parkings =data;// se enllena el arreglo 
    }); 
  }


add(){

  this.router.navigate(['/student-add']);

}


delete(id:number)
{
  this.rest.delete(id)
  .subscribe( 
    (data) =>{
      console.log(data);

      this.ngOnInit();

    })  
}

}
