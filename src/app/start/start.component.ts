import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

    displayView = false;
    currentView: string;

    constructor() { }

    ngOnInit() {
    }

    view() {
        this.displayView = true;
    }

    goNorth() {
        this.currentView = 'north';
    }

    goSouth() {
        this.currentView = 'south';
    }

}
