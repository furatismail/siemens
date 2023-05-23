import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendPrivatePortalFilmsFeatureFilmsComponent } from './frontend-private-portal-films-feature-films.component';

describe('FrontendPrivatePortalFilmsFeatureFilmsComponent', () => {
  let component: FrontendPrivatePortalFilmsFeatureFilmsComponent;
  let fixture: ComponentFixture<FrontendPrivatePortalFilmsFeatureFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendPrivatePortalFilmsFeatureFilmsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      FrontendPrivatePortalFilmsFeatureFilmsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
