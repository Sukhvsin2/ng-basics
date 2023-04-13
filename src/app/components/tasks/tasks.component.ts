import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import {TaskService} from "../../services/task.service"
import { UiService } from 'src/app/services/ui.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  toggleReminder(task: Task){
    this.taskService.toggleReminder(task).subscribe()
  }

  addNewTask(newTask: any){
    this.tasks.push(newTask)
    this.taskService.addTask(newTask).subscribe()
  }
}
