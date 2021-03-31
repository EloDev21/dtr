import { TestBed } from '@angular/core/testing';

import { ContactsrvService } from './contactsrv.service';

describe('ContactsrvService', () => {
  let service: ContactsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
