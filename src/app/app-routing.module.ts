import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatDocumentComponent } from './Components/creat-document/creat-document.component';
import { DocumentComponent } from './Components/document/document.component';
import { InfodocumentComponent } from './Components/infodocument/infodocument.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { UpdatedocumentComponent } from './Components/updatedocument/updatedocument.component';

const routes: Routes = [
      {path:"document",component:DocumentComponent},
      {path:"",component:StatisticsComponent},
      {path:"createdocument",component:CreatDocumentComponent},
      {path:"updatedocument/:id",component:UpdatedocumentComponent},
      {path:"infodocument/:id",component:InfodocumentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
