import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
eventData:any = '';  
twoWayBinding:string = '';
fName:string = 'Mudassir'
lName:string = 'Hussain'
fullName:string = this.fName + ' ' + this.lName
holder = 'attribute binding s'
// property binding
obj = {
  name: 'Mudassir',
  age: 24,
  address: 'Lahore'
}
imageUrl:string = 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?cs=srgb&dl=pexels-neo-853421-2653362.jpg&fm=jpg'
// event binding
data(e:any){
  this.eventData = e.target.value;
  console.log(this.eventData);  
}
onInputChange(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  console.log(inputElement.value); // Logs the value only when the input loses focus
}
// attribute binding
ariaLabel: string = 'Submit Button';

  logAriaLabel(): void {
    console.log(document.querySelector('button')?.getAttribute('aria-label'));
  }// class binding
isActive: boolean = true;
// style binding
bgColor: string = 'lightblue';
}
