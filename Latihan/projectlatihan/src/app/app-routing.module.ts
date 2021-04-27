import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobaComponent } from './coba/coba.component';
import { FormComponent } from './form/form.component';
import { DaftarkelasComponent } from './daftarkelas/daftarkelas.component';
import { InsertdataComponent } from './insertdata/insertdata.component';

const routes: Routes = [
  { path: 'coba', component: CobaComponent },
  { path: 'form', component: FormComponent },
  { path: 'daftarkelas',component: DaftarkelasComponent },
  { path: 'insertdata', component:InsertdataComponent},
  { path: 'editkelas/:id', component:InsertdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
