import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  //retrieves list of contacts every time the page loads
  getContacts(): void{
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  //adds a new contact. Passes in necessary fields from the form and sends the to the addContact field in the contact service
  add(name: string, address: string, email: string, phone: string): void {
    name = name.trim();
    address = address.trim();
    email = email.trim();
    phone = phone.trim();
    if (!name) { return; }
    this.contactService.addContact({ name, address, email, phone } as unknown as Contact)
      .subscribe(contact => {
        this.contacts.push(contact);
      });
  }

  delete(contact: Contact): void{
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactService.deleteContact(contact).subscribe();
  }

}
