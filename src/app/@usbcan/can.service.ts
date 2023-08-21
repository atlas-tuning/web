/// <reference types="w3c-web-usb" />

import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

declare const ga: any;

@Injectable()
export class CanService {
  constructor() {

  }

  async connect() {
    console.log("Hello world");


  }
}
