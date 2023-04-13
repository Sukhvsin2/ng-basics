import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL: string = 'http://localhost:3000/tasks'

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiURL}`)
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(`${this.apiURL}/${task.id}`)
  }

  toggleReminder(task: Task): Observable<Task>{
    task.reminder = !task.reminder
    return this.http.put<Task>(`${this.apiURL}/${task.id}`, task, httpOptions)
  }

  addTask(newTask: Task): Observable<Task>{
    return this.http.post<Task>(`${this.apiURL}`, newTask, httpOptions);
  }
}

