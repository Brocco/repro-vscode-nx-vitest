import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib03Component } from './lib-03.component';

describe('Lib03Component', () => {
  let component: Lib03Component;
  let fixture: ComponentFixture<Lib03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib03Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
