import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  constructor(private localTaskService: TaskServiceService,
              private localRouter: ActivatedRoute,
              private theRealRouter: Router) { }
  theOneTask:any = {};
  theUpdatedTask:any = {};
  localTaskEdit() {
    this.localRouter.params
    .subscribe((params)=>{
      console.log(params);
      this.localTaskService.editTask(params['id'],this.theUpdatedTask)
        .subscribe((theEditedTaskFromServer)=>{
          console.log('-------------------------theEditedTakesFromServer:',theEditedTaskFromServer);
          this.theRealRouter.navigate([`/details/${theEditedTaskFromServer._id}`])
        })
    })
  }
  ngOnInit(){
    this.localRouter.params
    .subscribe((params)=>{
      this.localTaskService.getOneTask(params['id'])
        .subscribe((theTask)=>{
          this.theOneTask.title = theTask.title;
          this.theOneTask.description = theTask.description;
          this.theUpdatedTask.title = theTask.title;
          this.theUpdatedTask.description = theTask.description;
        })
    })
  }
}
