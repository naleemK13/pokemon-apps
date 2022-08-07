import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  defaultHeight: number = 180;
  defaultColor: string = "#de041e";
  initialColor: string =  "#f5f5f5";

  constructor(private element:ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);

  }

  @Input("appBorderCard") borderColor:string; // alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }
  setBorder(color: string){
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }

  setHeight(height: number): void { 
    this.element.nativeElement.style.height = `${height}px`;
  }


}
