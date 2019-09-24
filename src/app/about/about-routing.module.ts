import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractComponent } from './components/contract/contract.component';

const routes: Routes = [
  { path: '', redirectTo: 'contract', pathMatch: 'full' },
  { path: 'contract', component: ContractComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
