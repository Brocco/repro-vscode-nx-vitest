import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibJComponent } from './lib-j.component';

describe('LibJComponent', () => {
  let component: LibJComponent;
  let fixture: ComponentFixture<LibJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibJComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
