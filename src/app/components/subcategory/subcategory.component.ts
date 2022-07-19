import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  subCategories: any;
  catID:any;

  constructor(private dataService: DataService, private activated:ActivatedRoute){
    this.catID=this.activated.snapshot.paramMap.get('catID')
    this.dataService.getcategoriesByID(this.catID).subscribe((response: any) => {
      this.subCategories = response.data;
    })
  }
  ngOnInit(): void {
  }

}
