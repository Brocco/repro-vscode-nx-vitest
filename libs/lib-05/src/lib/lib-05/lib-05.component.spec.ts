import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib05Component } from './lib-05.component';

describe('Lib05Component', () => {
  let component: Lib05Component;
  let fixture: ComponentFixture<Lib05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib05Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
