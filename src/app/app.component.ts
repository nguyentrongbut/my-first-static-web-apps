import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hi {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
