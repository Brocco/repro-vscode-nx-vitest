import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibLComponent } from './lib-l.component';

describe('LibLComponent', () => {
  let component: LibLComponent;
  let fixture: ComponentFixture<LibLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibLComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
