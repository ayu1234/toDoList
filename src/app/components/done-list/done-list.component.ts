import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {
  listData = [];
  constructor(private toDoListService: ToDoListService) { }

  ngOnInit(): void {
    this.toDoListService.getDoneListData.subscribe((data) => {
      this.listData = data;
    });
  }
  changeStatus(data): void {
    data.done= false;
    this.toDoListService.changeList(data);
  }

}
