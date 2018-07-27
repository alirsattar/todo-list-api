import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  constructor(private localHTTP: Http) { };
  getTasks() {
    return this.localHTTP.get('http://localhost:3000/api/tasks')
      .map((allTasks)=>{
        return allTasks.json()
      });
  }
  getOneTask(theID) {
    return this.localHTTP.get(`http://localhost:3000/api/tasks/${theID}`)
      .map((theTask)=>{
        return theTask.json()
      });
  }
  editTask(theID,theNewObject) {
    return this.localHTTP.post(`http://localhost:3000/api/tasks/edit/${theID}`,theNewObject)
      .map((theEditedTask)=>{
        return theEditedTask.json();
      })
  }
  
  // getRandom() {
  //   return this.http.get('http://api.icndb.com/jokes/random')
  //     .map((res) => res.json());
  // }

}
