import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    currentView: string = "home";

    constructor() { }

    ngOnInit() {
    }

    start() {
        this.currentView = "start"
    }

}
