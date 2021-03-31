import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsrvService} from "../contactsrv.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  FormData : FormGroup;

  constructor(private builder: FormBuilder, private contact : ContactsrvService) { }
  onSubmit(FormData : FormGroup) {
    console.log(FormData)
    this.contact.postMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({error})
      })
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),

      Comment: new FormControl('', [Validators.required])
    })
  }

}
