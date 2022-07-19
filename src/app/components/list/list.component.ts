import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  categoryData:any

  constructor(private dataService:DataService) {
    this.dataService.getData().subscribe((record:any)=>{
      this.categoryData=record.data;
    })
   }

  ngOnInit(): void {
  }

}
