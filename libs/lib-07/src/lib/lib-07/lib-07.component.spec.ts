import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib07Component } from './lib-07.component';

describe('Lib07Component', () => {
  let component: Lib07Component;
  let fixture: ComponentFixture<Lib07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib07Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
