import { Injectable } from '@angular/core';
import {Contact} from './contact';
import { CONTACTS } from './mock-contacts';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = 'api/contacts'; 
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  //retrieves contacts from the "server"
  getContacts(): Observable<Contact[]>
  {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  //gets a single contact from the "server" when user chooses that contact
  getContact(id: number): Observable<Contact>{
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url);
  }

  //updates contact when user presses "save" on the contact-info template
  updateContact(contact: Contact): Observable<any>{
    return this.http.put(this.contactsUrl, contact, this.httpOptions);
  }

  //adds a new contact to the "server"
  addContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.contactsUrl, contact, this.httpOptions);
  }

  //deletes a contact 
  deleteContact(contact: Contact | number): Observable<Contact>{
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;

    return this.http.delete<Contact>(url, this.httpOptions);
  }

  
}
