import { Component, Input, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
