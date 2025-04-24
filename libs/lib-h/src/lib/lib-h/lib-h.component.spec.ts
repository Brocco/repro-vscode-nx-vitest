import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibHComponent } from './lib-h.component';

describe('LibHComponent', () => {
  let component: LibHComponent;
  let fixture: ComponentFixture<LibHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibHComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
