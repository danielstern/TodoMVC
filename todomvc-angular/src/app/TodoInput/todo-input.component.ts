import { Component, Output, EventEmitter } from '@angular/core';

interface NewTodoEvent {
    text : string;
}

@Component({
    selector:`TodoInput`,
    templateUrl:'todo.input.html'
})
export default class {
    public input : string = "";
    @Output() newTodoEvent : EventEmitter<NewTodoEvent> = new EventEmitter<NewTodoEvent>();

    public go(){
        this.newTodoEvent.emit({text:this.input});
        this.input = "";
    }
};