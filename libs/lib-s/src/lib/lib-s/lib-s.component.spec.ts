import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibSComponent } from './lib-s.component';

describe('LibSComponent', () => {
  let component: LibSComponent;
  let fixture: ComponentFixture<LibSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibSComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
