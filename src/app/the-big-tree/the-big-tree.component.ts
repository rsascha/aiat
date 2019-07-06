import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-the-big-tree',
    templateUrl: './the-big-tree.component.html',
    styleUrls: ['./the-big-tree.component.scss']
})
export class TheBigTreeComponent implements OnInit {

    displayView = false;
    currentView: string;
    displayAnalyseTreeResult = false;

    constructor() { }

    ngOnInit() {
    }

    view() {
        this.displayView = true;
    }

    perform(wantToDo: string, object: string) {
        console.log('perform: ', wantToDo, object);
        this.displayAnalyseTreeResult = wantToDo == 'analyse' && object == 'tree';

    }
}
