import { IdocumentFile } from "./idocument-file"


export interface Idocument {
         id:number
         name:string
         documents:IdocumentFile[]
          date:Date
          createdDate:Date
          due_date:Date
          priorityId:number,
          priority:string
}
