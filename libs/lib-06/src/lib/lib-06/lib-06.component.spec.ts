import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib06Component } from './lib-06.component';

describe('Lib06Component', () => {
  let component: Lib06Component;
  let fixture: ComponentFixture<Lib06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib06Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
