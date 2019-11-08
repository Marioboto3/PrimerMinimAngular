'use strict';
export class Student {
  id: string;
  name: string;
  address: string;
  phones: [{
    description: string;
    number: string;
  }];
  studies: [{
    studies: string;
  }]
  constructor(id = '', name = '', address = '', phones = null, studies = null) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phones = phones;
    this.studies = studies;
  }
}
