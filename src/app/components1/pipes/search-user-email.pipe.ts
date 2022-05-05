import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUserEmail'
})
export class SearchUserEmailPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    let search = args.toLowerCase();
    return value.filter(feedback =>{
      let userEmail = feedback.user.userEmail.toLowerCase();
      return userEmail.indexOf(search) !== -1;
    })
  }

}
