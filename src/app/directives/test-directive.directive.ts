import { Directive,Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';


@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective implements OnInit {

  constructor(private renderer : Renderer2, private elRef : ElementRef) {}

   ngOnInit(){
    
   }
   @HostListener('mouseenter') mouseenter(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#337ab7');
   }
   @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#000');
   }

}
