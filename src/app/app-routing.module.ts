import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoaiComponent } from './loai/loai.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { CartComponent } from './cart/cart.component';
import { ListSanphamComponent } from './list-sanpham/list-sanpham.component';
import { NotfoundComponent } from './notfound/notfound.component';






const routes: Routes = [
{path:'',component:HomeComponent},
{path:'sanpham',component:ListSanphamComponent},
{path:'admin',component:AdminComponent},
{path:'admin/loai',component:LoaiComponent},
{path:'admin/sanpham',component:SanPhamComponent},
{path:'cart',component:CartComponent},
{ path: '**', component: NotfoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
