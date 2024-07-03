import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  userInfoForm: FormGroup;
  formData:any = ''
  constructor(private formBuilder:FormBuilder){
    this.userInfoForm = this.formBuilder.group({
      fullName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      age:['', [Validators.required,]],
      address:['', Validators.required],
    })
  }
  onSubmit(){
    if(this.userInfoForm.invalid){
      return;
    }else{
      this.formData = this.userInfoForm.value;
      this.userInfoForm.reset();  // reset form fields after successful submission
      console.log(this.formData);
      
    }
  }
  dataFromChild(child:any){
    console.log('Data from child:', child);
    this.userInfoForm.patchValue(child);
  }

}
