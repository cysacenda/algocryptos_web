import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalVolumesKpiComponent } from './global-volumes-kpi.component';

describe('GlobalVolumesKpiComponent', () => {
  let component: GlobalVolumesKpiComponent;
  let fixture: ComponentFixture<GlobalVolumesKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalVolumesKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalVolumesKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
