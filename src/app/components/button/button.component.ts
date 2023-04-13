import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnFun: any = new EventEmitter();

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  fireBtn(){
    this.btnFun.emit();
  }

  ngAfterViewInit(): void{
    this.cdr.detectChanges()
  }
}
