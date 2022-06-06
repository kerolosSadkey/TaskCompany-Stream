import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentComponent } from './Components/document/document.component';
import { NavsideComponent } from './Components/navside/navside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatDocumentComponent } from './Components/creat-document/creat-document.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatedocumentComponent } from './Components/updatedocument/updatedocument.component';
import { InfodocumentComponent } from './Components/infodocument/infodocument.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterModule } from '@angular/router';
import { StatisticsComponent } from './Components/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    NavsideComponent,
    CreatDocumentComponent,
    UpdatedocumentComponent,
    InfodocumentComponent,

    StatisticsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    PdfViewerModule,
    NgxDocViewerModule,
    NgxExtendedPdfViewerModule,
    RouterModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
