import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service";
import { UiService } from "src/app/services/ui.service";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  listOfTasks: Task[] = [];
  showAddTask:boolean;
  subscription:Subscription;

  // ts shorthand to create and assign class properties from constructor params
  // https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties
  constructor(
    private taskService: TaskService, 
    private uiService:UiService) { 
      this.subscription = this.uiService
        .onToggle()
        .subscribe(val => this.showAddTask = val)
  }

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) => (this.listOfTasks = tasks));
  }

  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(
      () => this.listOfTasks = this.listOfTasks.filter(entry => entry.id !== task.id));
  }

  updateReminder(task:Task){
    this.taskService.toggleReminder(task).subscribe();
  }

  addTask(newTask:Task){
    this.taskService.addTask(newTask).subscribe(task => this.listOfTasks.push(task));
  }
}
