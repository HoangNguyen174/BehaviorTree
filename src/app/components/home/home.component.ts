/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
/**
 * Import the ngrx configured store
 */
import { Store } from '@ngrx/store';
import { State } from '../../store/index';

import * as path from 'path';

// Allow us to use Notification API here.
declare var Notification: any;

const style = require('./home.component.scss').toString();
const template = require('./home.component.html').toString();

@Component({
  selector: 'ae-home',
  template: template,
  styles: [style],
})
export class HomeComponent implements OnInit {
  name: string;

  messageForm = new FormGroup({
    messageText: new FormControl('Angular2'),
  });

  constructor(public store: Store<State>) { }

  ngOnInit() {
    let state = this.store.select('user').subscribe((userState: any) => {
      this.name = userState.username;
    });
  }
  doNotify() {
    let message = {
      title: "Content-Image Notification",
      body: "Short message plus a custom content image",
    };
    new Notification(message.title, message);
  }
}
