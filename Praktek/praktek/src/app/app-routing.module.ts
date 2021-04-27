import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtamaComponent } from './utama/utama.component';
import { TabelcostomerComponent } from './tabelcostomer/tabelcostomer.component';


const routes: Routes = [
    { path: 'utama', component: UtamaComponent },
    { path: 'tabelcostomer', component: TabelcostomerComponent },
    { path: 'editcustomer/:id', component: UtamaComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
