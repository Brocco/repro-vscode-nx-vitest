import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibGComponent } from './lib-g.component';

describe('LibGComponent', () => {
  let component: LibGComponent;
  let fixture: ComponentFixture<LibGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibGComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
