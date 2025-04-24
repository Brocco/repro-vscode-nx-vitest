import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibIComponent } from './lib-i.component';

describe('LibIComponent', () => {
  let component: LibIComponent;
  let fixture: ComponentFixture<LibIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
