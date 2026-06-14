import { Pipe, PipeTransform } from '@angular/core';

<<<<<<< HEAD
@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 100, ellipsis = '...'): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.substring(0, limit) + ellipsis;
=======
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
  }
}
