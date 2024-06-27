import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
  userForm!: FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.userForm = this.formBuilder.group({
      name:['', Validators.required],
      email:[
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}$')
        ],
      ],
      address:this.formBuilder.group({
        street:['', Validators.required],
        city:[
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z]+$')
        ],
      ],
    
    }),
    phoneNumbers:this.formBuilder.array([
      this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ])
    ])
  });
  }
  
  get phoneNumbers(){
    return this.userForm.get('phoneNumbers') as FormArray;
  }
  
  removerPhoneNumber(index:number){
    this.phoneNumbers.removeAt(index);
  }
  
  addPhoneNumber(){
    this.phoneNumbers.push(this.formBuilder.control('',[
      Validators.required,
      Validators.pattern(/^\d{10}$/)
    ]));
  }
  
  
  submitData(){
    if(this.userForm.valid){
      let a = this.userForm.value
      console.log(a);
      console.log(a.address);
      // console.log(this.userForm);
      
      
    }
  }
}
