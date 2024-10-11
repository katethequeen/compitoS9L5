import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiatBrandComponent } from './fiat-brand.component';

describe('FiatBrandComponent', () => {
  let component: FiatBrandComponent;
  let fixture: ComponentFixture<FiatBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiatBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiatBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
