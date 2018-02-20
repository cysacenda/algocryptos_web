import { TestBed, inject } from '@angular/core/testing';

import { Ui.ActionsService } from './ui.actions.service';

describe('Ui.ActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ui.ActionsService]
    });
  });

  it('should be created', inject([Ui.ActionsService], (service: Ui.ActionsService) => {
    expect(service).toBeTruthy();
  }));
});
