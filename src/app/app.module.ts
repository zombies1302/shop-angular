import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoaiComponent } from './loai/loai.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { CartComponent } from './cart/cart.component';
import { ListSanphamComponent } from './list-sanpham/list-sanpham.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoaiComponent,
    SanPhamComponent,
    CartComponent,
    ListSanphamComponent,
    NotfoundComponent,
    OrderComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
