import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transformColumn',
  standalone: true
})
export class TransformColumnPipe implements PipeTransform {

  transform(rowData: any, fieldName: string, toDisplayValue: (value: any) => string = (v) => `${v}`, ...args: unknown[]): unknown {
    const value = this.getValue(fieldName, rowData);
    return toDisplayValue(value);
  }

  private getValue(fieldName: string, rowData): any {
    let value = rowData;
    const variables = fieldName.split('.');
    for (const element of variables) {
      value = value[element];
    }
    return value
  }
}
