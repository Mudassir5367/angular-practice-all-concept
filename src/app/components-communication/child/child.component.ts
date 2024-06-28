import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() dataToChild:any = ''
  dataFromParent:any = [];
constructor(){}
ngOnInit(){
  // this.dataFromParent = [...this.dataToChild]
  console.log(this.dataToChild);
  
}

}
