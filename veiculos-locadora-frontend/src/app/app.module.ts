import { VeiculoModule } from './veiculo/veiculo.module';
import { VeiculoReportComponent } from './veiculo/veiculo-report/veiculo-report.component';
import { VeiculoCadastroComponent } from './veiculo/veiculo-cadastro/veiculo-cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { Ng2InputMaskModule } from 'ng2-input-mask';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    VeiculoModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2InputMaskModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
