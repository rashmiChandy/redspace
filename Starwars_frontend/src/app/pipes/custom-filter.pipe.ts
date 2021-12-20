import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
// custom pipe to filter data
// Takes input as array list of objects to filter, filter text and property based on which filtering needs to be done on the array of objects
  transform(arrayItems: any[], filterText:string, filterProperty:string): any {
    if (!arrayItems || !filterText) {
      return arrayItems;
    }
  
    return arrayItems.filter(item => item[filterProperty].toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
  }

}
