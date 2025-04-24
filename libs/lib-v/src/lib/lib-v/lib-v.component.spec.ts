import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibVComponent } from './lib-v.component';

describe('LibVComponent', () => {
  let component: LibVComponent;
  let fixture: ComponentFixture<LibVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibVComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
