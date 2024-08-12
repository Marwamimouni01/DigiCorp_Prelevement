import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionprelevementComponent } from './gestionprelevement.component';

describe('GestionprelevementComponent', () => {
  let component: GestionprelevementComponent;
  let fixture: ComponentFixture<GestionprelevementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionprelevementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionprelevementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
