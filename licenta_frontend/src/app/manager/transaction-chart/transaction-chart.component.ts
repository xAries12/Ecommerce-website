import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit } from "@angular/core";
import { ChartData, TransactionChartData } from "src/app/models/transaction.mode";


@Component({
  selector: 'app-transaction-chart',
  templateUrl: './transaction-chart.component.html',
  styleUrls: ['./transaction-chart.component.scss']
})

export class TransactionChartComponent implements OnInit{

  constructor(private transactionService:TransactionService){}
  dataChart:ChartData[]=[];
  tcd:TransactionChartData[]=[];
  chartOptions = {
    title: {
    	text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple",  y: 10  }
      ]
    }]
  };

  ngOnInit(): void {
    this.transactionService.getChartData().subscribe((t)=>{
      this.tcd=t;
      this.dataChart=this.convertToChartData(this.tcd);
      this.chartOptions = {
        title: {
          text: "The number of products sold in each category ever"
        },
        data: [{
          type: "bar",
          dataPoints: this.dataChart
        }]
      };
    });
  }
  convertToChartData(transactionChartData: TransactionChartData[]): ChartData[] {
    const chartData: ChartData[] = [];

    transactionChartData.forEach(data => {
      const { category, number } = data;
      const chartDatum: ChartData = {
        label: category,
        y: number
      };
      chartData.push(chartDatum);
    });

    return chartData;
  }
}




