import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Toast } from './toast.interface';

@Component({
  selector: 'app-toaster',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() toast: Toast;
  @Input() i: number;
  @Output() remove = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
}
