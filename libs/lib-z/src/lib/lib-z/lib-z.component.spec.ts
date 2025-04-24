import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibZComponent } from './lib-z.component';

describe('LibZComponent', () => {
  let component: LibZComponent;
  let fixture: ComponentFixture<LibZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibZComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
