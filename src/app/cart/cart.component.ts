import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listLoai:any;
  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
  }

}
