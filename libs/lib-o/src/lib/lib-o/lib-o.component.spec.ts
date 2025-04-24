import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibOComponent } from './lib-o.component';

describe('LibOComponent', () => {
  let component: LibOComponent;
  let fixture: ComponentFixture<LibOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibOComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
