import { TestBed, inject } from '@angular/core/testing';

import { LojaService } from './loja.service';

describe('LojaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LojaService]
    });
  });

  it('should be created', inject([LojaService], (service: LojaService) => {
    expect(service).toBeTruthy();
  }));
});
