import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Idocument } from 'src/app/Models/idocument';
import { IPriority } from 'src/app/Models/ipriority';
import { DocumentService } from 'src/app/Service/document.service';
import { PriorityService } from 'src/app/Service/priority.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-creat-document',
  templateUrl: './creat-document.component.html',
  styleUrls: ['./creat-document.component.scss']
})
export class CreatDocumentComponent implements OnInit {
  model:NgbDateStruct | undefined;
  progress :number=0;
  priorityList!:IPriority[]
  formdata!:FormGroup;
  constructor(private doucumentService:DocumentService,
    private prioirtyservice:PriorityService,
    private fb:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {



  this.formdata = this.fb.group({
    name: ['',Validators.required],
   documents: ['',Validators.required],
    priorityId: ['',Validators.required],
    date: ['',Validators.required],
    due_Date: ['',Validators.required],
});




   this.prioirtyservice.GetAllPriority().subscribe({
     next: (plist) => {
       this.priorityList=plist
       console.log( this.priorityList);
    console.log("inside next"+ this.priorityList);
  },
  error: (err) => {
    console.log("inside error");
    console.log(err);
  },
  complete: () => {

  }
  })
  }


  fileFormData= new FormData();

  // uploade file by event and store in formdata group
  uploadFile(files:any){

    if (files.length > 0) {

      let counter = 0
      files.forEach((element:any,i:number) => {
        let fileToUpload = <File>files[i];

        this.fileFormData.append('documents', fileToUpload, fileToUpload.name);

      });
      let that=this
   let cv= setInterval(function(){
      that.progress+=20

      if( that.progress==120){
        that.progress=0
          clearInterval(cv)
      }
   },400)
      // this.formdata.patchValue({
      //   documents:  file,
      // });
    }


  }


  //sumbmet form
  onSubmit(data:any){





    this.doucumentService.AddDocument(data.name,data.date,data.due_Date,data.priorityId,this.fileFormData).subscribe({
      next: () => {

     console.log("inside next");
   },
   error: (err) => {
     console.log("inside error");
     console.log(err);
   },
   complete: () => {
    Swal.fire(
      'Document Updeted Successfully!',
      'You clicked the button!',
      'success'
    ).then(()=>{
      this.router.navigateByUrl("/document")
    })
   }
   });
  }
}
