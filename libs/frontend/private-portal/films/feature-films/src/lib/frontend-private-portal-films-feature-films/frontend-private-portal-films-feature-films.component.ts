import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '@siemens/frontend/private-portal/films/data-access-films';
import { Observable } from 'rxjs';

@Component({
  selector: 'siemens-frontend-private-portal-films-feature-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frontend-private-portal-films-feature-films.component.html',
  styleUrls: ['./frontend-private-portal-films-feature-films.component.css'],
})
export class FrontendPrivatePortalFilmsFeatureFilmsComponent implements OnInit {
  private filmsService = inject(FilmsService)

  films$! : Observable<Array<any>>

  ngOnInit() {
    this.films$ = this.filmsService.getAll();
  }
}
