import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-space-details',
  templateUrl: './space-details.component.html',
  styleUrls: ['./space-details.component.css']
})
export class SpaceDetailsComponent implements OnInit {

  space:any;
  constructor(public rest: StudentServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rest.getById_Space(this.route.snapshot.params['id_Space']).subscribe((data: {}) => {
      console.log(data);
      this.space = data;
    });
  }

}
