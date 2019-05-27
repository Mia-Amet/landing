import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
  subscribe: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.subscribe = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

}
