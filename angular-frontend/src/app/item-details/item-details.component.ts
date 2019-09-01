import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  providers: [ServicesService]
})
export class ItemDetailsComponent implements OnInit {

  id: any;
  details: any;

  constructor(private service: ServicesService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.itemDetail()
  }

  itemDetail() {
    this.service.getItemDetails(this.id)
      .subscribe((data: any) => {
        this.details = data
      })
  }

  goback() {
    this.router.navigate(['/']);
  }

}
