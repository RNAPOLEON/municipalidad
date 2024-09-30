import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { expand } from 'rxjs';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.scrollFunction(); // Ensure to call it once to set initial state
    this.renderer.listen('window', 'scroll', () => {
      this.scrollFunction();
    });
    const expandElement = document.getElementById('expand');
    const burguerElement = document.getElementById('hambuergerClick');

    if (expandElement && burguerElement) {
      burguerElement.addEventListener('click', () => this.toggleClass());
      expandElement.addEventListener('click', () => this.toggleClass());
    }
  }

  scrollFunction() {
    const menuElement = this.el.nativeElement.querySelector('#menu');
    if (menuElement) {
      if (window.scrollY > 0) {
        this.renderer.addClass(menuElement, 'scrolled');
      } else {
        this.renderer.removeClass(menuElement, 'scrolled');
      }
    }
  }
  toggleClass() {
    const expandElement = document.getElementById('expand');
    if (expandElement) {
      expandElement.classList.toggle('displayNone');
    }
  }
  
}
