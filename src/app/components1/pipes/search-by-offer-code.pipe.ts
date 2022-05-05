import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByOfferCode'
})
export class SearchByOfferCodePipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    let search = args.toLowerCase();
    return value.filter(offer =>{
      let offerCode = offer.offerCode.toLowerCase();
      return offerCode.indexOf(search) !== -1;
    })
  }

}
