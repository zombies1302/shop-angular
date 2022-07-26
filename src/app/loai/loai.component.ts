import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-loai',
  templateUrl: './loai.component.html',
  styleUrls: ['./loai.component.css']
})
export class LoaiComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  listLoai:any;

  ngOnInit(): void {
    this.listLoai = this.d.getLoai().subscribe ( 
      data => this.listLoai= data
      );
  }
  loaiThem(data:any){
    var tensp= data.tenLoai;
    // var giasp= sp.giasp;
    const    arrLoai = {tenLoai:tensp}
    console.log(data);
    this.d.AddLoai(arrLoai).subscribe ( data => alert('Thêm thành công'));
  }

}
