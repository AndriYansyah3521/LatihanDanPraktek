import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CobaComponent } from './coba/coba.component';
import { FormComponent } from './form/form.component';
import { DetailKelasComponent } from './detail-kelas/detail-kelas.component';
import { HttpClientModule } from "@angular/common/http";
import { DaftarkelasComponent } from './daftarkelas/daftarkelas.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    AppComponent,
    CobaComponent,
    FormComponent,
    DetailKelasComponent,
    DaftarkelasComponent,
    InsertdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    DataTablesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
