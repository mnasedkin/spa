import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
export type chartProgressOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard-graphics',
  templateUrl: './dashboard-graphics.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class DashboardGraphicsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartProgressOptions: Partial<chartProgressOptions>;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Installations",
          data: [0, 1, 0, 2, 1, 0, 3, 4, 0]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: true
        },
        fontFamily: 'Nunito Sans, Helvetica, Arial, sans-serif'
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Installed Products by Month:",
        align: "left",
        style: {
          fontSize: '16px'
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      },
      yaxis: {
        labels: {
          show: true,
          align: 'right',
          minWidth: 0,
          maxWidth: 160,
          style: {
            fontSize: '12px',
            fontFamily: 'Nunito Sans, Helvetica, Arial, sans-serif',
            fontWeight: 400,
          },
          offsetX: 0,
          offsetY: 0,
          rotate: 0,
          formatter: (value) => { return Math.floor(value).toString();},
        },
        floating: false
      }
    };

    this.chartProgressOptions = {
      chart: {
        width: 300,
        height: 350,
        type: 'radialBar',
        fontFamily: 'Nunito Sans, Helvetica, Arial, sans-serif'
      },
      series: [83.33],
      labels: ['5 Product installed'],
      title: {
        text: "Installed Products in Your Subscription:",
        align: "center",
        style: {
          fontSize: '16px'
        }
      },
    }
  }

  ngOnInit() {
  }
}
