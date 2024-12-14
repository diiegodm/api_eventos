import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteneorComponent } from './conteneor.component';

describe('ConteneorComponent', () => {
  let component: ConteneorComponent;
  let fixture: ComponentFixture<ConteneorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteneorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteneorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
