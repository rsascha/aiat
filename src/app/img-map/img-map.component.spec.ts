import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMapComponent } from './img-map.component';

describe('ImgMapComponent', () => {
    let component: ImgMapComponent;
    let fixture: ComponentFixture<ImgMapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ImgMapComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImgMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('markerToPixel', () => {
        let result = component["markerToPixel"](
            [0, 100, 0, 100]
        )
    });

});
