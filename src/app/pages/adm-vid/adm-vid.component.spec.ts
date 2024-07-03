import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVidComponent } from './adm-vid.component';

describe('AdmVidComponent', () => {
  let component: AdmVidComponent;
  let fixture: ComponentFixture<AdmVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmVidComponent]
    });
    fixture = TestBed.createComponent(AdmVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
