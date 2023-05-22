import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendSharedLayoutComponent } from './frontend-shared-layout.component';

describe('FrontendSharedLayoutComponent', () => {
  let component: FrontendSharedLayoutComponent;
  let fixture: ComponentFixture<FrontendSharedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendSharedLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendSharedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
