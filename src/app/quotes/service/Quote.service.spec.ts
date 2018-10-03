/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuoteService } from './Quote.service';

describe('Service: Quote', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteService]
    });
  });

  it('should ...', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));
});
