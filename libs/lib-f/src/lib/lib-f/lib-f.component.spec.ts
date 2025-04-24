import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibFComponent } from './lib-f.component';

describe('LibFComponent', () => {
  let component: LibFComponent;
  let fixture: ComponentFixture<LibFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibFComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
