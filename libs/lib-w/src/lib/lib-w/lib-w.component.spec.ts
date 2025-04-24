import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibWComponent } from './lib-w.component';

describe('LibWComponent', () => {
  let component: LibWComponent;
  let fixture: ComponentFixture<LibWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibWComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
