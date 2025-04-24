import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib09Component } from './lib-09.component';

describe('Lib09Component', () => {
  let component: Lib09Component;
  let fixture: ComponentFixture<Lib09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib09Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
