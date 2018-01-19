import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptokpisComponent } from './cryptokpis.component';

describe('CryptokpisComponent', () => {
  let component: CryptokpisComponent;
  let fixture: ComponentFixture<CryptokpisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptokpisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptokpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
