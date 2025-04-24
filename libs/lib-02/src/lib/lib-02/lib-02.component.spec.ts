import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib02Component } from './lib-02.component';

describe('Lib02Component', () => {
  let component: Lib02Component;
  let fixture: ComponentFixture<Lib02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib02Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
