import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePrelevementComponent } from './demande-prelevement.component';

describe('DemandePrelevementComponent', () => {
  let component: DemandePrelevementComponent;
  let fixture: ComponentFixture<DemandePrelevementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandePrelevementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePrelevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
