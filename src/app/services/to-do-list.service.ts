import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import  *  as  todoListData  from  "src/app/mockJson/toDoList.json";
import  *  as  doneListData  from  "src/app/mockJson/doneList.json";
@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  getToDoList: any = (todoListData as any).default;
  getDoneList: any = (doneListData as any).default;
  private toDoList = new BehaviorSubject(this.getToDoList);
  private doneList = new BehaviorSubject(this.getDoneList);
  getToDoListData = this.toDoList.asObservable();
  getDoneListData = this.doneList.asObservable();
  constructor() {}

  addTask(obj): void {
    this.getToDoList.push(obj)
    this.toDoList.next(this.getToDoList);
  }

  changeList(data): void {
    if(data.done) {
      this.getDoneList.push(data);
      this.doneList.next(this.getDoneList);
      this.getToDoList.splice(this.getToDoList.findIndex(res=>res.id == data.id),1)
      this.toDoList.next(this.getToDoList);
    } else {
      this.getToDoList.push(data);
      this.toDoList.next(this.getToDoList);
      this.getDoneList.splice(this.getDoneList.findIndex(res=>res.id == data.id),1)
      this.doneList.next(this.getDoneList);
    }
  }
}
