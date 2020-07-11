import { Component, OnInit } from '@angular/core';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  listData = [];
  constructor(private toDoListService: ToDoListService) { }

  ngOnInit(): void {
    this.toDoListService.getToDoListData.subscribe((data) => {
      this.listData = data;
    });
  }
  changeStatus(data): void {
    data.done= true;
    this.toDoListService.changeList(data);
  }

}
