import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibPComponent } from './lib-p.component';

describe('LibPComponent', () => {
  let component: LibPComponent;
  let fixture: ComponentFixture<LibPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibPComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
