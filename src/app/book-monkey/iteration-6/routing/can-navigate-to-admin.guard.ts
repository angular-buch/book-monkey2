import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanNavigateToAdminGuard implements CanActivate {

  accessGranted = false;

  canActivate() {
    if(!this.accessGranted) {
      this.accessGranted = window.confirm('Mit großer Macht kommt große Verantwortung. Möchten Sie den Admin-Bereich betreten?');
    }

    return this.accessGranted;
  }
}
