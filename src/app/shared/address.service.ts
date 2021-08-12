import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }
  form = new FormGroup({
    $key: new FormControl(null),
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.email),
    PhoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
}
