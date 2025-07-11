import { Component, ElementRef, Host, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    // '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control;
  private el = inject(ElementRef);

  @HostListener('click') onClick() {
    console.log('Control clicked');
    console.log(this.el);
  }
  label = input.required<string>();

  // onClick() {
  //   console.log('Control clicked');
  // }
  
}
