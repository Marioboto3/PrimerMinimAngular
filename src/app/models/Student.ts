'use strict';
export class Student {
  id: string;
  name: string;
  address: string;
  phones: [{
    description: string;
    number: string;
  }];
  constructor(id = '', name = '', address = '', phones = null) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phones = phones;
  }
}
