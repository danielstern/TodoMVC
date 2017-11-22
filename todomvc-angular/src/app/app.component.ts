import { Component, Inject } from '@angular/core';
import { state } from './shared'
import Todo  from './TodoList/todo.component'

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html',
})
export class AppComponent {
    private todos : Todo[];
    private showDone : boolean = true;

    constructor(@Inject(state) state) {
        this.todos = state.todos;
    }

    private onNewTodo(e){
        if (e.text) {
            this.todos.push({text:e.text, done: false})
        }
    }

    private onFilterToggle(e){
        this.showDone = e;
    }
}