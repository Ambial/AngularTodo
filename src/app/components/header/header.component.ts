import { Component, OnInit } from '@angular/core';
import { UiService } from "src/app/services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string = 'Angular Task Tracker';
  showAddTask:boolean = true;
  subscription:Subscription;

  constructor(private uiService:UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe(val => this.showAddTask = val)
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();

  }

}
