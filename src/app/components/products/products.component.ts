import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  catID:any;
  constructor(private dataService:DataService,private activated:ActivatedRoute) {
    this.catID=this.activated.snapshot.paramMap.get('catID')
    this.dataService.getproductsByID(this.catID).subscribe((response: any) => {
      this.products = response.data;
    })
   }

  ngOnInit(): void {
  }

}
