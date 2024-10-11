import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiBrandComponent } from './audi-brand.component';

describe('AudiBrandComponent', () => {
  let component: AudiBrandComponent;
  let fixture: ComponentFixture<AudiBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AudiBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
