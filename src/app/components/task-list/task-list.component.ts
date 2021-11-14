import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  listOfTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) => (this.listOfTasks = tasks));
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(
      () => this.listOfTasks = this.listOfTasks.filter(entry => entry.id !== task.id));
  }
}
