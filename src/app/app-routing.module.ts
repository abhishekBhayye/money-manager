import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-expense',
    loadChildren: () => import('./add-expense/add-expense.module').then( m => m.AddExpensePageModule)
  },
  {
    path: 'account-statement',
    loadChildren: () => import('./account-statement/account-statement.module').then( m => m.AccountStatementPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
