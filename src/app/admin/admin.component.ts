import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.ComboChart,
    dataTable: [
    ['Date', 'Khô gà', 'Trà Sữa Thái Đỏ', 'Khô Bò', 'Trà Sữa Thái Xanh'],
    ['16/05/2022',  2,      4,         2,3],
    ['17/05/2022',  5,      1,        5,5],
    ['18/05/2022',  2,      6,        10,7],
    ['20/05/2022',  1,      0,        6,6],
    ['26/05/2022',  5,      4,         2,6],
    ['27/05/2022',  5,      4,         2,6],
    ['28/05/2022',  5,      4,         2,6],
    ['29/05/2022',  5,      4,         2,6],
    ],


    options: {
      title : 'Thống kê đơn đặt hàng',
      height: 500,
      vAxis: {title: 'Sô Đơn'},
      hAxis: {title: 'Ngày'},
      seriesType: 'bars',
      series: {3: {type: 'line'}
    }},
  };
  constructor() { }

  ngOnInit(): void {
  }
  title = "ADmin";

}
