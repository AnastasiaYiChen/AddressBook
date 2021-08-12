import { Component, OnInit } from '@angular/core';

import {AddressService} from '../shared/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {
  set submitted(value: boolean) {
    this._submitted = value;
  }
  get submitted(): boolean {
    return this._submitted;
  }


  constructor(public addressService: AddressService) { }

  private _submitted!: boolean;
  formControls = this.addressService.form.controls;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this._submitted = true;
    if (this.addressService.form.valid){
      /* if(this.AddressService.form.get('$key').value == null)
     //insert
     else //update*/
      this._submitted = false;
    }
  }

}
