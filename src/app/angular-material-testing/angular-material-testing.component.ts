import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-angular-material-testing',
  templateUrl: './angular-material-testing.component.html',
  styleUrl: './angular-material-testing.component.scss',
})
export class AngularMaterialTestingComponent {
  @ViewChild(MatSelect) matSelect:MatSelect | undefined ;
  arr = [1,2,3,4,5,6,7]
  foods:any[]= [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
