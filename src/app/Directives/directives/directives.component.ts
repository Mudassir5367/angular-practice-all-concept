import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  isvalid:boolean = false;
  isClass1 = false;
  isClass2 = false;
  binding:string = '';
  age:number = 100;
  color = 'orange' 
  styleToggle(){
    this.isvalid = !this.isvalid
  }

  toggleClass() {
    this.isClass1 = !this.isClass1;
    this.isClass2 = !this.isClass2;
  }
  items = [1,2, 'orange', 'mango']
  item = 12
  
}
