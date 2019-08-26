// core
import {ChangeDetectorRef, Component} from '@angular/core';
// utils
import {fadeAnimation} from '../../shared/utils/route-animation';

@Component({
  selector: 'nv-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
  animations: [fadeAnimation]
})
export class LazyComponent {

  items = ['VueJS', 'Angular', 'React']; // Ember, Node.js
  book = 'Great Expectations';

  constructor(
    private changeDetection: ChangeDetectorRef
  ) {
    this.changeDetection.detach();
    this.book = 'Old Man & Sea';
  }

  addItem(item) {
    this.items.push(item);
    // this.items = [...this.items, item]
    console.log('Change detection enabled');
  }

  applyChanges() {
    this.changeDetection.detectChanges();
    // Здесь изначально отключается механизм отслеживания изменений. Затем переменной book присваивается новое значение, но в шаблоне изменения будут видны только после нажатия кнопки Apply, которая инициирует принудительный запуск механизма ChangeDetection.
  }

}
