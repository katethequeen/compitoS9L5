import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordBrandComponent } from './ford-brand.component';

describe('FordBrandComponent', () => {
  let component: FordBrandComponent;
  let fixture: ComponentFixture<FordBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FordBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FordBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
