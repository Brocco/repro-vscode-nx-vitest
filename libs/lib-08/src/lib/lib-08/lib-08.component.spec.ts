import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib08Component } from './lib-08.component';

describe('Lib08Component', () => {
  let component: Lib08Component;
  let fixture: ComponentFixture<Lib08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib08Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
