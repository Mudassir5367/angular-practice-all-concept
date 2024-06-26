import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
items =[ 'heloo-java-script', 'pipes-java-script', 'angular-java-script', 'react-java-script', 'express-java-script', 'mongoodb-java-script']
currentDate = new Date()
money = 1000;
}
