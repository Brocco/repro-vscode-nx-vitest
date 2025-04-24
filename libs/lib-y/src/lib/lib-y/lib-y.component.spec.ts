import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibYComponent } from './lib-y.component';

describe('LibYComponent', () => {
  let component: LibYComponent;
  let fixture: ComponentFixture<LibYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibYComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
