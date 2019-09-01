import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ServicesService, DatePipe]
})
export class ItemsComponent implements OnInit {

  itemsArray = []
  categoriesArray = [];
  selectedID = 1;
  likedCount: any
  itemSearch:any
  userIsSearchingProduct = false;
  // likedArray = [];

  constructor(private service: ServicesService, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
    this.items();
    this.categories();
  }
  setUserIsSearchingProduct(){
    this.userIsSearchingProduct = true;
  }

  items() {
    this.service.getItems()
      .subscribe((data: any) => {
        this.itemsArray = data.data
      })
  }

  categories() {
    this.service.getCategories()
      .subscribe((data: any) => {
        this.categoriesArray = data.data
      })
  }

  click(id) {
    this.likedCount = id
    // this.likedArray.push({id, selected:'true'})
    // console.log(this.likedArray)
  }

  itemDetails(id, name) {
    this.router.navigate(['/detail/' + id + '/' + name]);
  }

  selectedCategory(id) {
    this.selectedID = id;
  }

  goback() {
    this.router.navigate(['/']);
  }


}
