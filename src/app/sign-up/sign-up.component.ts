import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listLoai:any;
  listCart:any = 0;

  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
    this.listCart = JSON.parse(this.d.getItem() || '')
    
  }

}
