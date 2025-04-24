import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibQComponent } from './lib-q.component';

describe('LibQComponent', () => {
  let component: LibQComponent;
  let fixture: ComponentFixture<LibQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibQComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
