import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingRedditComponent } from './missingReddit.component';

describe('MissingRedditComponent', () => {
  let component: MissingRedditComponent;
  let fixture: ComponentFixture<MissingRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
