import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  //Db used to represent a remote server
  createDb() {
    const contacts = [
      { id: 1, 
        Name: 'Bob Wallace', 
        Address: '6695 Wallace Way Bend, OR', 
        Email: 'WallaceMan@gmail.com',
        Phone: '888-888-8888'
    },
    { id: 2, 
        Name: 'Kevin Malone', 
        Address: '7782 Scranton Ave Scranton, PA', 
        Email: 'KMalone@gmail.com',
        Phone: '123-654-1122'
    },
    { id: 3, 
        Name: 'John Smith', 
        Address: '555 5th Ave New York, NY', 
        Email: 'JohnSmith@yahoo.com',
        Phone: '801-666-1234'
    },
    { id: 4, 
        Name: 'Daniel Larusso', 
        Address: '3636 Reseda Hills Drive Los Angeles, CA', 
        Email: 'DLarusso@gmail.com',
        Phone: '333-561-8894'
    }
    ];
    return {contacts};
  }

  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
}
}
