import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImgMapComponent } from '../img-map/img-map.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    currentView: string = "home";

    @ViewChild('test', { static: false })
    private test: ImgMapComponent;

    constructor() { }

    ngOnInit() {
    }

    start() {
        this.currentView = "start"
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
        this.test.onClick = (event) => {
            console.log(event);
        }
    }


}
