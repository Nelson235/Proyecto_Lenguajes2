import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles:any =[];

  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(){

    this.roles = [];//inicializandolo
    this.rest.get_Roles().subscribe((data:{}) => {//el suscribe es como un obtenga al metodo
      console.log(data);//imprime lo que trae data y viene de la api
      this.roles =data;// se enllena el arreglo 
    }); 
  }


add_Role(){

  this.router.navigate(['/role-add']);

}


delete(id_role:number)
{
  this.rest.delete_Rate(id_role)
  .subscribe( 
    (data) =>{
      console.log(data);

      this.ngOnInit();

    })  
}

}
