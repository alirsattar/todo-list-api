import { Component, OnInit } from '@angular/core';

// IMPORTING THE TASK SERVICE

import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  tasksArray:Array<any> = [];
  
  constructor(private localTaskService: TaskServiceService) { };

  getTasksArray(){

    this.localTaskService.getTasks()
      .subscribe((theTasks)=>{

        this.tasksArray = theTasks.reverse();

      })

  }
  
  ngOnInit() {

    this.getTasksArray();
  }

}
