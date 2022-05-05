import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    let search = args.toLowerCase();
    return value.filter(user =>{
      let userName = user.userName.toLowerCase();
      return userName.indexOf(search) !== -1;
    })
  }

}
