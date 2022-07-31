import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listLoai:any;
  listCart:any = 0;

  constructor(private d:DuLieuService) { }

  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
    this.listCart = JSON.parse(this.d.getItem() || '')
    
  }

}
