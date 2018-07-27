import { Component, OnInit } from '@angular/core';

import { TaskServiceService } from '../services/task-service.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  singleEntry:any = {};
  
  constructor(private localTaskService: TaskServiceService, private localRouter: ActivatedRoute) { };

  ngOnInit() {
      this.localRouter.params
        .subscribe((params)=>{
          this.localTaskService.getOneTask(params['id'])
            .subscribe((theReturnedTask)=>{
              this.singleEntry = theReturnedTask;
            })
        })
  }

}
