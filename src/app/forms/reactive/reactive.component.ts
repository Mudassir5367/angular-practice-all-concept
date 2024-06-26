import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
reactiveForm:FormGroup
constructor(private formBuilder: FormBuilder){
  this.reactiveForm = this.formBuilder.group({
name:['', [Validators.required, Validators.min(3)]],
email:['', [Validators.required, Validators.email]],
password:['', [Validators.required, Validators.minLength(5)]],
phone:['', [Validators.required,  Validators.pattern(/^\d{10}$/)]],
  })
}
onSubmit(){
  if(this.reactiveForm.invalid){
    return
  }else{
    console.log(this.reactiveForm.value);
    this.reactiveForm.reset();
  }
}
}
