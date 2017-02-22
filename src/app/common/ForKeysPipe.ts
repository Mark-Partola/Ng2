import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'keyValue'
})
export class ForKeysPipe implements PipeTransform {

  transform(value, args: string[]): any {
    let result = [];

    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        result.push({
          key: key,
          value: value[key]
        });
      }
    }

    return result;
  }
}
