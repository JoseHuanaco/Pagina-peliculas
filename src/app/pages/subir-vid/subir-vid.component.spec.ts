import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirVidComponent } from './subir-vid.component';

describe('SubirVidComponent', () => {
  let component: SubirVidComponent;
  let fixture: ComponentFixture<SubirVidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirVidComponent]
    });
    fixture = TestBed.createComponent(SubirVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
