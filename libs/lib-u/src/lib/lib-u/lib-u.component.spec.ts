import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibUComponent } from './lib-u.component';

describe('LibUComponent', () => {
  let component: LibUComponent;
  let fixture: ComponentFixture<LibUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibUComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
