import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "../Task";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiURL}/${task.id}`
    return this.http.delete<Task>(url);
  }

  toggleReminder(alteredTask:Task):Observable<Task>{
    const url = `${this.apiURL}/${alteredTask.id}`
    return this.http.patch<Task>(url, { "reminder":alteredTask.reminder }, httpOptions);
  }

  addTask(newTask:Task):Observable<Task>{
    const rand = Math.floor(Math.random() * 10000);
    newTask.id = rand;
    const url = this.apiURL
    return this.http.post<Task>(url, newTask, httpOptions);
  }

}
