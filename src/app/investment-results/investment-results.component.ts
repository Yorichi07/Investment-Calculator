import { CurrencyPipe } from '@angular/common';
import { Component, Input, computed, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input({ required: true }) results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];    //array of objects

  // results =
  //   input<{
  //       year: number;
  //       interest: number;
  //       valueEndOfYear: number;
  //       annualInvestment: number;
  //       totalInterest: number;
  //       totalAmountInvested: number;
  //     }[]>();

  // private investmentService = inject(InvestmentService);
  constructor(private investmentService:InvestmentService){
  }

  // get results(){
  //   return this.investmentService.resultData;
  // }

  results = computed(()=> this.investmentService.resultsData)
}
