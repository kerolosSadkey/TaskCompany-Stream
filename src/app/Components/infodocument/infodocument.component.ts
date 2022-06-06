import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { Idocument } from 'src/app/Models/idocument';
import { DocumentService } from 'src/app/Service/document.service';
import { PriorityService } from 'src/app/Service/priority.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-infodocument',
  templateUrl: './infodocument.component.html',
  styleUrls: ['./infodocument.component.scss']
})
export class InfodocumentComponent implements OnInit {

  public page=2
  constructor(private doucumentService:DocumentService,
    private prioirtyservice:PriorityService,
    private route: ActivatedRoute,
    private router:Router) {
      pdfDefaultOptions.assetsFolder = 'bleeding-edge';
    }
 id!:number
 onedocument!:Idocument
 isdoc!:false
 urlv!:string
 baseurl!:string
 progress:number=0

 extimg!:any
 extdoc!:any
 extpdf!:any
 extexcle!:any
 extmusic!:any
  ngOnInit(): void {
    this.id = parseInt( this.route.snapshot.paramMap.get('id')!)
    console.log(this.id)
    this.baseurl=environment.APIBaseURL+"/Document/";
    this.extimg=/jpeg|png|jpg/
    this.extpdf=/pdf/
    this.extdoc=/docx|doc/
    this.extexcle=/xlsx|xls|xlsm|xltm/
    this.extmusic=/mp3/
    console.log( this. extimg.test("index1.jpg"))
    // this.baseurl="https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc"
    this.urlv="https://docs.google.com/gview?url=%URL%&embedded=true"
    this.doucumentService.GetDocumentbyId(this.id).subscribe(document=>{
      this.onedocument=document;
      console.log( this.onedocument)


    })

  }
  isdown:number=0;
  dowlond(id:number){
    let that=this
   let cv= setInterval(function(){
      that.progress+=20

      if( that.progress==120){
        that.progress=0
          clearInterval(cv)
      }
   },400)

 this.isdown=id
  }

  dowlondimg(event:any){

  }
}
