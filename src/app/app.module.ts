import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    ListComponent,
    ProductsPageComponent,
    SubcategoryComponent,
    ProductsComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
