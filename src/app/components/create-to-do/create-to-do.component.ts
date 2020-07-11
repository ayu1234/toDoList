import { Component, OnInit, DoCheck } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.scss']
})
export class CreateToDoComponent implements OnInit {
  taskForm = new FormGroup({
    taskName: new FormControl('', Validators.required),
    taskDescription: new FormControl('', Validators.required),
    taskRepetation: new FormControl('', Validators.required)
  });
  
  constructor(private toDoListService: ToDoListService) { }

  ngOnInit(): void {
  }

  submitForm(group: FormGroup | FormArray): void {    
    group.markAsTouched()
    for (let i in group.controls) {
      if (group.controls[i] instanceof FormControl) {
        group.controls[i].markAsTouched();
      } else {
        this.submitForm(group.controls[i]);
      }
    }
    if(group.status === "VALID") {
      const tempObj = {
          "done": false,
          "task_name": group.value.taskName,
          "task_description": group.value.taskDescription,
          "task_repeatation": Boolean(group.value.taskRepetation),
          "id": "TASKID_"+(Math.random()*1000000)
      }
      this.toDoListService.addTask(tempObj);
    }
   }
}
