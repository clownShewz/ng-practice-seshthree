import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNavLink'
})
export class FormatNavLinkPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').map((p) => value.indexOf(p) === 0 ? p.toUpperCase() : p ).join('');
  }

}
