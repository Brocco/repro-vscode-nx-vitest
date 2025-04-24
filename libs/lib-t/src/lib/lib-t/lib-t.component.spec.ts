import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibTComponent } from './lib-t.component';

describe('LibTComponent', () => {
  let component: LibTComponent;
  let fixture: ComponentFixture<LibTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibTComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
