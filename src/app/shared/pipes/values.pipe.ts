import {Pipe, PipeTransform} from '@angular/core';
import {isObject} from '@shared/pipes/helpers-pipe';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
  transform(obj: any): any[] {
    if (Array.isArray(obj) || !isObject(obj)) {
      return obj;
    }

    return Object.keys(obj).map(k => obj[k]);
  }
}
