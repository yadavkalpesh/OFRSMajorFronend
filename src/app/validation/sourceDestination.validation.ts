import { FormGroup,AbstractControl, ValidatorFn } from "@angular/forms";

export function sourceNotEqualToDestinationValidator(control:AbstractControl): { [key:string]: boolean} | null{
    const source = control.get('source');
    const destination = control.get('destination');

    return source && destination && source.value === destination.valid ?
    {'invalidMatch':true}:null;
}
   
