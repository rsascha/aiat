import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-the-big-tree',
    templateUrl: './the-big-tree.component.html',
    styleUrls: ['./the-big-tree.component.scss']
})
export class TheBigTreeComponent implements OnInit {

    displayView = false;
    currentView: string;

    constructor() { }

    ngOnInit() {
    }

    view() {
        this.displayView = true;
    }

    perform(analyse: string, tree: string) {
        console.log('perform: ', analyse, tree);

    }
}
