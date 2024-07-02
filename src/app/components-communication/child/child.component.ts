import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() dataToChild:any = ''
  dataFromParent:any = [];
constructor(){}
// ngOnInit(){
//   // this.dataFromParent = [...this.dataToChild]
//   console.log(this.dataToChild);
  
// }

ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges', changes);
  
  if (changes['dataToChild'] && changes['dataToChild'].currentValue) {
    this.dataFromParent.push({ ...changes['dataToChild'].currentValue });
    console.log('Data array:', this.dataFromParent);
  }
}
removeItem(item: number){
// console.log(item);
this.dataFromParent = this.dataFromParent.filter((data:any) => data !== item)
// const removedItem = this.dataFromParent.splice(item, 1);
//     console.log('Removed item:', removedItem);

}
clearAll(){
  this.dataFromParent = [];
}

}
