import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFlightByName'
})
export class SearchFlightByNamePipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    let search = args.toLowerCase();
    return value.filter(flight =>{
      let flightName = flight.flightName.toLowerCase();
      return flightName.indexOf(search) !== -1;
    })
  }

}
