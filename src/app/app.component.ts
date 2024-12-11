import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RewzHeaderComponent } from "./rewz-header/rewz-header.component";
import { RewzFooterComponent } from "./rewz-footer/rewz-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RewzHeaderComponent, RewzFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RewardzAssesment';
}
