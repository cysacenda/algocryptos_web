import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsChooserComponent } from './columns-chooser.component';

describe('ColumnsChooserComponent', () => {
  let component: ColumnsChooserComponent;
  let fixture: ComponentFixture<ColumnsChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnsChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
