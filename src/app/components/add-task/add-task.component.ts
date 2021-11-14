import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() addRequest = new EventEmitter<Task>();

  text:string;
  day:string;
  reminder:false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.text) {
      alert("Please enter a description and a due date!");
      return;
    }
    const newTask:Task = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.addRequest.emit(newTask);
    this.resetForm();

  }

  resetForm():void {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
