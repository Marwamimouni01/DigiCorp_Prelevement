import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandCardComponent } from './demand-card.component';

describe('DemandCardComponent', () => {
  let component: DemandCardComponent;
  let fixture: ComponentFixture<DemandCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
