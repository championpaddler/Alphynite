import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-companyprofile',
  templateUrl: './companyprofile.component.html',
  styleUrls: ['./companyprofile.component.css']
})
export class CompanyprofileComponent implements OnInit {
  registerForm:FormGroup;
  signupsubmitted:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    document.getElementById('hide').style.display="none"
   
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      Image: [''],
      Rate: [''],
      Category: [''],



      
  });
  }
  onSubmit() {
  

 
    console.log(this.registerForm)
      
            this.signupsubmitted = true;
      
            // stop here if form is invalid
            if (this.registerForm.invalid) {
                return;
            }
          }


}
