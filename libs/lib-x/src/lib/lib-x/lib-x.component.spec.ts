import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibXComponent } from './lib-x.component';

describe('LibXComponent', () => {
  let component: LibXComponent;
  let fixture: ComponentFixture<LibXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibXComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
