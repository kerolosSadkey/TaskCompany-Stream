import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idocument } from 'src/app/Models/idocument';
import { DocumentService } from 'src/app/Service/document.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
ListDocument!:Idocument[]
baseurl!:string
  constructor(private documentService:DocumentService,private router:Router) { }

  ngOnInit(): void {
    this.baseurl=environment.APIBaseURL+"/Document/";
    this.documentService.GetAllDocument().subscribe(doclist=>{
      console.log(doclist)
      this.ListDocument=doclist
    })
  }

  deleteDocument(id:number){
    this.documentService.DeleteDocument(id).subscribe({
      next:()=>{
        Swal.fire(
          'Document Delete Successfully!',
          'You clicked the button!',
          'success'
        ).then(()=>{

          this.router.navigateByUrl('/document')
          this.ngOnInit()
        })

      }
    })
  }
}
