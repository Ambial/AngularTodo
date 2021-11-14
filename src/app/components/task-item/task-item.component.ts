import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Output() deleteRequest = new EventEmitter<Task>();
  @Output() updateReminderRequest = new EventEmitter<Task>();
  
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task) {
    this.deleteRequest.emit(this.task);
  }

  onToggle(){
    this.task.reminder = !this.task.reminder;
    this.updateReminderRequest.emit(this.task);
  }

}
