import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibEComponent } from './lib-e.component';

describe('LibEComponent', () => {
  let component: LibEComponent;
  let fixture: ComponentFixture<LibEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibEComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
