import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TASKS } from "../../mock-tasks";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  listOfTasks: Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
