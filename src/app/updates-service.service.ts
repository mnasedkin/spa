import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatesServiceService {
  updates = [
    {
      productName: 'Product1',
      productPhrase: 'Update My Drivers',
      version: 'x.x.x.x.xxx',
      link: '/product.exe',
    },
    {
      productName: 'Product2',
      productPhrase: 'Secure My PC',
      version: 'x.x.x.x.xxx',
      link: '/product.exe',
    },
  ];
  constructor() {
  }
}
