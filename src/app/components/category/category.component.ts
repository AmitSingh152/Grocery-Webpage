import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryData:any
  constructor(private dataService:DataService,private router:Router) {
    this.dataService.getData().subscribe((datat:any)=>{
      this.categoryData=datat.data
    })
   }
   onExploreButtonClick(catID:number){
    return this.router.navigate(['products',catID])
   }

  ngOnInit(): void {
  }

}
