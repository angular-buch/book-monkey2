/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanNavigateToAdminService } from './can-navigate-to-admin.service';

describe('Service: CanNavigateToAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanNavigateToAdminService]
    });
  });

  it('should ...', inject([CanNavigateToAdminService], (service: CanNavigateToAdminService) => {
    expect(service).toBeTruthy();
  }));
});
