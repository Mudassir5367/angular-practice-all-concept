import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  // Component Directive Definition
  // Definition: A component directive is a directive with a template. Components are the most common of the three directives and are a fundamental building block of Angular applications. Every component in Angular is essentially a directive with a template.
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
