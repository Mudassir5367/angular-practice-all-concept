import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDash'
})
export class RemoveDashPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return value
    }else{

      return value.replace(/-/g, ' ');
    }
  }

}

