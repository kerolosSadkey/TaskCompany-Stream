import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/Service/document.service';
import { PriorityService } from 'src/app/Service/priority.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  ListDocumentlength!:number
  ListPrioritylength!:number
  constructor(private documentService:DocumentService,private router:Router,
   private priorityservice:PriorityService) { }

  ngOnInit(): void {
    this.documentService.GetAllDocument().subscribe(doclist=>{
      console.log(doclist)
      this.ListDocumentlength=doclist.length
    })

    this.priorityservice.GetAllPriority().subscribe(plist=>{

      this.ListPrioritylength=plist.length
    })
  }

}
