import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibNComponent } from './lib-n.component';

describe('LibNComponent', () => {
  let component: LibNComponent;
  let fixture: ComponentFixture<LibNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibNComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
