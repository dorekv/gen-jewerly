import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})

export class Registration {
nameTextInput: string = '';
numericInput: number = 0;
stringInput: string ='';
numericSelect: number = 0;
checkboxInput: boolean = false;
radioInput: number = 1;

citySelectOptions: any[] = [
  { text: 'Nicossia', value: 1},
  { text: 'Limassol', value: 2},
  { text: 'Larnaka', value: 3},
  { text: 'Pahos', value: 4},
  { text: 'Agia Napa', value: 5},  
];

constructor(){}
ngOnInit(): void{}


getType(value: any ): string {
  if(value === null || value === undefined) return '';

  console.log('ns', this.numericSelect);
  return typeof value;
}

registreMe(): void{}

}