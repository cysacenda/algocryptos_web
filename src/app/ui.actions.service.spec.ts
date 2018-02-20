import { TestBed, inject } from '@angular/core/testing';

import { UIActionsService } from './ui.actions.service';

describe('Ui.ActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UIActionsService]
    });
  });

  it('should be created', inject([UIActionsService], (service: UIActionsService) => {
    expect(service).toBeTruthy();
  }));
});
