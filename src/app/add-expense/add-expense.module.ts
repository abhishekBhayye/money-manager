import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AddExpensePageRoutingModule } from './add-expense-routing.module';

import { AddExpensePage } from './add-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExpensePageRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [AddExpensePage]
})
export class AddExpensePageModule {}
