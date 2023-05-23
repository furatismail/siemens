import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'siemens-frontend-shared-layout',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatToolbarModule],
  templateUrl: './frontend-shared-layout.component.html',
  styleUrls: ['./frontend-shared-layout.component.css'],
})
export class FrontendSharedLayoutComponent {
  opened = true;
}
