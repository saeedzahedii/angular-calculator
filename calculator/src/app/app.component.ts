import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public firstNumber: number = 0;
  public secondNumber: number = 0;
  public result: number = 0;
  public operator: string = '';
  public flag: boolean = false;
  public sep: boolean = false;
  public power: number = 1;
  public numcount: number = 0;
  public dis: boolean = false;
  public dis2: boolean = false;
  onPushbtn(num: number) {
    if (this.operator == '') {
      this.numcount++;
      (this.numcount >= 11) ? this.dis = true : this.dis = false;
      if (!this.sep) {
        this.firstNumber = (this.firstNumber * 10) + num;
      } else if (this.sep) {
        this.firstNumber = (num / (Math.pow(10, this.power))) + this.firstNumber;
        this.power++;
      }
    }
    else {
      this.numcount++;
      if (this.numcount >= 11) {
        this.dis = true;
        this.dis2 = true;
      } else {
        this.dis = false;
      }
      if (!this.sep) {
        this.secondNumber = (this.secondNumber * 10) + num;
      } else if (this.sep) {
        this.secondNumber = (num / (Math.pow(10, this.power))) + this.secondNumber;
        this.power++;
      }
    }
  }
  onOperator(op: string) {
    this.operator = op;
    this.flag = true;
    this.power = 1;
    this.sep = false;
    this.dis = false;
    this.numcount = 0;
  }
  onDelete() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operator = '';
    this.result = 0;
    this.sep = false;
    this.power = 1;
    this.flag = false;
    this.dis = false;
    this.dis2 = false;
    this.numcount = 0;
  }
  onCalculate() {
    (this.operator == '*') ? (this.result = this.firstNumber * this.secondNumber) : this.result;
    (this.operator == '-') ? (this.result = this.firstNumber - this.secondNumber) : this.result;
    (this.operator == '+') ? (this.result = this.firstNumber + this.secondNumber) : this.result;
    (this.operator == '/') ? (this.result = this.firstNumber / this.secondNumber) : this.result;
  }
  onSeperator() {
    this.sep = true;
    //   if (!this.flag) {
    //     this.firstNumber = (num / 10) + this.firstNumber;
    //   }
    //   else if (this.flag) {
    //     this.secondNumber = (num / 10) + this.secondNumber;
    //   }
    // }
  }
}
