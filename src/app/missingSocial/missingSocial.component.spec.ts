import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingSocialComponent } from './missingSocial.component';

describe('MissingSocialComponent', () => {
  let component: MissingSocialComponent;
  let fixture: ComponentFixture<MissingSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
