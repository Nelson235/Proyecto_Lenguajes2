import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-add-validate',
  templateUrl: './student-add-validate.component.html',
  styleUrls: ['./student-add-validate.component.css']
})
export class StudentAddValidateComponent implements OnInit {

  studentForm: FormGroup;
  errorMessage: any;

   constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private rest:StudentServiceService, private router: Router) {
        

          this.studentForm = this.fb.group({
            id: 0,
            name: ['', [Validators.required]],//es requerido
            
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
           // major: ['', [Validators.required]]
            major: new FormControl('', [
              Validators.required,
              Validators.pattern('^[0-9]{1,2}$')
            ])
  
        })

    }


  ngOnInit() {
  }

  addStudent() {

    if (!this.studentForm.valid) {
      return;
    }

    this.rest.add(this.studentForm.value).subscribe((result) => {
      this.router.navigate(['/students']);
    }, (err) => {
      console.log(err);
    });
  }

  get id() { return this.studentForm.get('id'); }
  get name() { return this.studentForm.get('name'); }
  //get age() { return this.studentForm.get('age'); }
  get email() { return this.studentForm.get('email'); }
  get password() { return this.studentForm.get('password'); }
  //get nationality() { return this.studentForm.get('nationality'); }
  get major() { return this.studentForm.get('major'); }

}
