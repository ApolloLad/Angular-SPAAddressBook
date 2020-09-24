import { Injectable } from '@angular/core';
import {Contact} from './contact';
import { CONTACTS } from './mock-contacts';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]>
  {
    return of(CONTACTS);
  }
}
