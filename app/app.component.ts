import {Component} from '@angular/core';

export class Hero{
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1> 
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="hero name">    
        </div>
    `
})

export class AppComponent {

    title: string;
    hero: Hero;

    constructor(){
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'Windostorm'
        }
    }
}