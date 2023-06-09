import { MathService } from './services/math.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {

  transform(value:any){
    return Math.sqrt(value);
  }
  }


