import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoaiComponent } from './loai/loai.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { CartComponent } from './cart/cart.component';




const routes: Routes = [
{path:'',component:HomeComponent},
{path:'admin',component:AdminComponent},
{path:'admin/loai',component:LoaiComponent},
{path:'admin/sanpham',component:SanPhamComponent},
{path:'cart',component:CartComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
