import { Component, Input } from '@angular/core';

@Component({
    selector: `TodoList`,
    template:`<ul><Todo *ngFor="let t of todos" class="{{showDone ? '' : 'hide-done'}}" [text]="t.text" [done]="t.done"></Todo></ul>`
})
export default class TodoListComponent {
    @Input() todos : any[];
    @Input() showDone : boolean;
}