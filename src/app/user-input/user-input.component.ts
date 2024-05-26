import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  //calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('0');
  enteredDuration = signal('0');
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '0';
  // enteredDuration = '0';

  constructor(private investmentService:InvestmentService){

  }

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),
    //   duration: +this.enteredDuration(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   // initialInvestment: +this.enteredInitialInvestment,
    //   // duration: +this.enteredDuration,
    //   // expectedReturn: +this.enteredExpectedReturn,
    //   // annualInvestment: +this.enteredAnnualInvestment,
    // });
  }
}
