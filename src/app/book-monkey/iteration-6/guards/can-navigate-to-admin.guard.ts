import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanNavigateToAdminGuard implements CanActivate {

<TEX>\boldline</TEX>  accessGranted = false;

  canActivate(): boolean {
    if (!this.accessGranted) {
      this.accessGranted = window.confirm('Mit großer Macht kommt große Verantwortung. Möchten Sie den Admin-Bereich betreten?');
    }

    return this.accessGranted;
  }
}
