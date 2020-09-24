import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input() contact: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  //gets contact based on passed in Id
  getContact(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactService.getContact(id)
    .subscribe(contact => this.contact = contact);
  }

  //returns to previous page
  goBack(): void{
    this.location.back();
  }

  //saves changes to contact and returns to previous page
  save(): void {
    this.contactService.updateContact(this.contact)
      .subscribe(() => this.goBack());
  }

}
