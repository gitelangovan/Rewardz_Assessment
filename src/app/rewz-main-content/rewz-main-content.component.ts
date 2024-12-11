import { Component } from '@angular/core';
import { CompanyDetailsService } from '../Service/company-details.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RewzHeaderComponent } from '../rewz-header/rewz-header.component';
import { RewzFooterComponent } from '../rewz-footer/rewz-footer.component';

@Component({
  selector: 'app-rewz-main-content',
  standalone: true,
  imports: [NgxPaginationModule, RouterModule, CommonModule],
  templateUrl: './rewz-main-content.component.html',
  styleUrl: './rewz-main-content.component.scss'
})
export class RewzMainContentComponent {

  // Global Scope variables are declared
  jsonData: any = []
  resJson: String = "";
  pageNumber: number = 1;
  visibleIn: boolean = false
  incomingCategory: String = "";

  constructor(private fetchCall: CompanyDetailsService) { }

  ngOnInit(): void {
    debugger
    this.fetchCall.fetchDatasets().subscribe({
      next: (value) => this.jsonData = value,
      error: (error) => this.resJson = error,
      complete: () => this.resJson = "Data Successfully Fetched"
    });
  }

  // filter method for json data.
  filterMethoed(event: any) {
    var localArr = [];
    let incomingValue = event.target.value;
    var incomingValue1 = incomingValue.trim();
    if (incomingValue != "") {
      localArr = this.jsonData.filter((item: { name: string; }) => item.name.toLowerCase().includes(incomingValue1.toLowerCase()));
      this.jsonData = localArr;
    }
    else {
      this.ngOnInit();
    }
  }

  filterCategory(event: String) {
    debugger
    var localArr = [];
    this.incomingCategory = event;
    switch (this.incomingCategory) {
      case "eVoucher":
        localArr = this.jsonData.filter((item: { category: string; }) => item.category.toLowerCase().includes(this.incomingCategory.toLowerCase()));
        this.jsonData = localArr;
        this.incomingCategory = "";
        break;

      case "products":
        localArr = this.jsonData.filter((item: { category: string; }) => item.category.toLowerCase().includes(this.incomingCategory.toLowerCase()));
        this.jsonData = localArr;
        this.incomingCategory = "";
        break;

      case "food":
        localArr = this.jsonData.filter((item: { category: string; }) => item.category.toLowerCase().includes(this.incomingCategory.toLowerCase()));
        this.jsonData = localArr;
        this.incomingCategory = "";
        break;

      case "highDem":
        localArr = this.jsonData.filter((item: { category: string; }) => item.category.toLowerCase().includes(this.incomingCategory.toLowerCase()));
        this.jsonData = localArr;
        this.incomingCategory = "";
        break;

      default:
        this.ngOnInit();
        break;
    }
  }

  // Sorting method 
  sortingMethod(event: String) {
    var sortOrder = event;
    var localArr = [];
    if (sortOrder === 'A') {
      localArr = this.jsonData.sort((a: any, b: any) => a.name.localeCompare(b.name));
      this.jsonData = localArr;
    }
    else {
      localArr = this.jsonData.sort((a: any, b: any) => b.name.localeCompare(a.name));
      this.jsonData = localArr;
    }
  }


  sortBy() {
    this.visibleIn = !this.visibleIn;
  }
  closeSort() {

    this.visibleIn = !this.visibleIn;
    const element = document.getElementById('sorting_Details') as HTMLElement;
    if (this.visibleIn) {
      element.style.display = 'block'; // Show the element
    } else {
      element.style.display = 'none'; // Hide the element
    }
  }
}
