import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL='https://apolis-grocery.herokuapp.com/api'
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(`${this.BASE_URL}/category`)
  }
  getcategoriesByID(categoryID:number){
    return this.http.get(`${this.BASE_URL}/subcategory/${categoryID}`)
  }
  getproductsByID(categoryID:number){
    return this.http.get(`${this.BASE_URL}/products/cat/${categoryID}`)
  }
}
