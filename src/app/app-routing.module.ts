import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaoveGuard } from './baove.guard';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoaiComponent } from './loai/loai.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { CartComponent } from './cart/cart.component';
import { ListSanphamComponent } from './list-sanpham/list-sanpham.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';








const routes: Routes = [
{path:'',component:HomeComponent},
{path:'sanpham',component:ListSanphamComponent},
{path:'admin',component:AdminComponent,canActivate:[BaoveGuard]},
{path:'admin/loai',component:LoaiComponent,canActivate:[BaoveGuard]},
{path:'admin/sanpham',component:SanPhamComponent,canActivate:[BaoveGuard]},
{path:'cart',component:CartComponent},
{path:'admin/order',component:OrderComponent,canActivate:[BaoveGuard]},
{path:'login',component:LoginComponent},
{path:'signup',component:SignUpComponent},

{ path: '**', component: NotfoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
