import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Task} from "../../Task"

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter()
  text: string = "";
  date = Date().split(" ");
  day: string = [this.date[0],this.date[1],this.date[2], this.date[3], this.date[4]].join(" ");
  reminder: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }

  submit(){
    console.log("ceck");
    
    if(this.text === ""){
      alert("Please add task to save!")
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.addTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false

  }

}
