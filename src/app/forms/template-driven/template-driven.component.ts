import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {
  getData:any
  formData:any = {
    name:'',
    email:'',
    phone: '',
    password :'',

  }
  onSubmit(data:any){
    console.log(data.value);
    this.getData = data.value;
    
  }
}
