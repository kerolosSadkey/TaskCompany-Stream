import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Idocument } from 'src/app/Models/idocument';
import { IPriority } from 'src/app/Models/ipriority';
import { DocumentService } from 'src/app/Service/document.service';
import { PriorityService } from 'src/app/Service/priority.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatedocument',
  templateUrl: './updatedocument.component.html',
  styleUrls: ['./updatedocument.component.scss']
})
export class UpdatedocumentComponent implements OnInit {
 model:NgbDateStruct | undefined;
  progress :number=0;
  priorityList!:IPriority[]
  isdoc!:false
  urlv!:string
  baseurl!:string
  constructor(private doucumentService:DocumentService,
    private prioirtyservice:PriorityService,
    private route: ActivatedRoute,
    private fb:FormBuilder,
    private router:Router) { }

    id!:number;
    formdata!:FormGroup
    onedocument!:Idocument
  ngOnInit(): void {
    this.prioirtyservice.GetAllPriority().subscribe({
      next: (plist) => {
        this.priorityList=plist
        console.log( this.priorityList);
     console.log("inside next"+ this.priorityList);
   },

   })

    this.formdata = this.fb.group({
      id: ["",Validators.required],
      name: ["",Validators.required],
     documents: new FormControl(null, [Validators.required]),
      priorityId: ["", Validators.required],
      date:["", Validators.required],
      due_Date: ["",Validators.required],
  });

    this.id = parseInt( this.route.snapshot.paramMap.get('id')!)
    console.log(this.id)

    this.doucumentService.GetDocumentbyId(this.id).subscribe(document=>{
      this.onedocument=document;
      ;
      console.log( this.onedocument)
       this.formdata.patchValue({
        id:this.onedocument.id,
         name:this.onedocument.name,
         priorityId:this.onedocument.priorityId,
         date:this.onedocument.date,
         due_Date:this.onedocument.due_date
       })

    })

  }
  


  fileFormData= new FormData();

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

    }


  }



//submit form for update info or add file
  onSubmit(data:any){

   this.doucumentService.UpdateDocument(data.id,data.name,
    data.date,data.due_Date,data.priorityId,this.fileFormData).subscribe({
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




// delete file before update
deletefile(id:number){

  Swal.fire({
    title: 'Do you Sure   from deleteing for this file?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: `No`,
  }).then((result) => {

    if (result.isConfirmed) {

         this.doucumentService.DeleteFileDocument(id).subscribe({
           next:()=>{},
           error:(err)=>{},
           complete:()=>{
            Swal.fire('delete successfully!', '', 'success')
            this.ngOnInit();
           }
         })

    } else if (result.isDenied) {

    }
  })
}
}
