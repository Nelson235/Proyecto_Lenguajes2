import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-rate-add',
  templateUrl: './rate-add.component.html',
  styleUrls: ['./rate-add.component.css']
})
export class RateAddComponent implements OnInit {

  @Input() rateData ={id_rate:0,id_Type:0,per_Hour:0,per_HalfHour:0,per_Day:0,per_Week:0,per_Month:0,per_Year:0}
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addRate(){

    this.rest.add_Rate(this.rateData).subscribe((result) => {
      this.router.navigate(['/rate-list']);
    }, (err) => {
      console.log(err);
    });
  }

}
