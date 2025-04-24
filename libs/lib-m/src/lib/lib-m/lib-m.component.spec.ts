import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibMComponent } from './lib-m.component';

describe('LibMComponent', () => {
  let component: LibMComponent;
  let fixture: ComponentFixture<LibMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibMComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
