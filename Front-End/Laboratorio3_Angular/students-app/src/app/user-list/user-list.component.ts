import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.getStudents();
  }

  getStudents(){

    this.users = [];//inicializandolo
    this.rest.get_User().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.users =data;// se enllena el arreglo 
    }); 
  }


add_User(){

  this.router.navigate(['/user-add']);

}


delete(id_User:number)
{
  this.rest.delete_User(id_User)
  .subscribe( 
    (data) =>{
      console.log(data);

      this.ngOnInit();

    })  
}

}
