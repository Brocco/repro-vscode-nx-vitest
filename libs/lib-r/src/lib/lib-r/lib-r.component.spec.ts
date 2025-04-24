import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibRComponent } from './lib-r.component';

describe('LibRComponent', () => {
  let component: LibRComponent;
  let fixture: ComponentFixture<LibRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibRComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
