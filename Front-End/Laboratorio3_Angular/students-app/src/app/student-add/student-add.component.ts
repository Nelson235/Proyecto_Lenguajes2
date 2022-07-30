import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  id_Par:any;
  inad: number =1;

  @Input() parkingData ={id:0,name_Parking:'',capacity:0,province:'',district:''}
  @Input() spaceData ={id:0,number:0,id_Type:6,status:'Disponible',id_Vehicule:18,id_Parking:51,check_In:'',id_Rate:16}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addParking(){

    this.rest.add(this.parkingData).subscribe((result) => {


      this.rest.getByName(this.parkingData.name_Parking).subscribe((data: {}) => {
        console.log(data);
        this.id_Par = data;
       while(this.parkingData.capacity>=this.inad){
        this.inad = this.inad +1;
        this.rest.add_Space(this.id_Par).subscribe((result) => {
    });
  }
  this.router.navigate(['/students']);
      });
      
    }, (err) => {
      console.log(err);
    });

  }



}
