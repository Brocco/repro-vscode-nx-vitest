import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibKComponent } from './lib-k.component';

describe('LibKComponent', () => {
  let component: LibKComponent;
  let fixture: ComponentFixture<LibKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibKComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
