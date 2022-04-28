import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { SectionComponent } from './component/section/section.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/header/nav/nav.component';
import { BienvenidaComponent } from './component/header/bienvenida/bienvenida.component';
import { TitleComponent } from './component/section/title/title.component';
import { InformationComponent } from './component/section/information/information.component';
import { ProcessComponent } from './component/section/process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    NavComponent,
    BienvenidaComponent,
    TitleComponent,
    InformationComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
