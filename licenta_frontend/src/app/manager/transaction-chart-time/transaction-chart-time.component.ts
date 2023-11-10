import { Component } from '@angular/core';
import { ChartData, TransactionChartData } from 'src/app/models/transaction.mode';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-chart-time',
  templateUrl: './transaction-chart-time.component.html',
  styleUrls: ['./transaction-chart-time.component.scss']
})
export class TransactionChartTimeComponent{

  constructor(private transactionService:TransactionService){}
  dataChart:ChartData[]=[];
  tcd:TransactionChartData[]=[];
  exist=false;
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

  createChart(time:string): void {
    this.exist=false;
    this.transactionService.getChartData2(time).subscribe((t)=>{
      this.tcd=t;
      this.dataChart=this.convertToChartData(this.tcd);
      this.chartOptions = {
        title: {
          text: "The number of products sold in each category in the last "+time
        },
        data: [{
          type: "bar",
          dataPoints: this.dataChart
        }]
      };
      this.exist=true
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
