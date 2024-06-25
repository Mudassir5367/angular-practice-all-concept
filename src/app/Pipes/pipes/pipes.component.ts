import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
items =[ 'heloo', 'pipes', 'angular', 'react', 'express', 'mongoodb']
currentDate = new Date()
money = 1000;
}
