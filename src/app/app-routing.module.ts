import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { CategoryComponent } from "./components/category/category.component";
import { AuthGuard } from "./guard/auth.guard";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes:Routes=[
    {path:'',component:HomepageComponent},
    {path:'products/:catID',component:ProductsPageComponent,canActivate:[AuthGuard]},
    {path:'aboutus',component:AboutusComponent,canActivate:[AuthGuard]},
    {path:'contactus',component:ContactusComponent,canActivate:[AuthGuard]},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'category',component:CategoryComponent,canActivate:[AuthGuard]}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}