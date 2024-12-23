import { Component } from '@angular/core';

@Component({
  selector: 'app-rewz-footer',
  standalone: true,
  imports: [],
  templateUrl: './rewz-footer.component.html',
  styleUrl: './rewz-footer.component.scss'
})
export class RewzFooterComponent {

  currentYearElement: any;

  ngOnInit() {
    // getting current year
    this.currentYearElement = new Date().getFullYear().toString();
  }

}
