import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib04Component } from './lib-04.component';

describe('Lib04Component', () => {
  let component: Lib04Component;
  let fixture: ComponentFixture<Lib04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib04Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
