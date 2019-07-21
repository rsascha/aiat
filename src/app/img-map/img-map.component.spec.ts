import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImgMapComponent } from './img-map.component';
import { HomeComponent } from '../home/home.component';
import { StartComponent } from '../start/start.component';
import { TheBigTreeComponent } from '../the-big-tree/the-big-tree.component';

describe('ImgMapComponent', () => {
    let component: ImgMapComponent;
    let fixture: ComponentFixture<ImgMapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ImgMapComponent,
                HomeComponent,
                StartComponent,
                TheBigTreeComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImgMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        let image = fixture.debugElement.nativeElement.querySelector('img');
        image.src = "/assets/aiat-home.png";
        fixture.detectChanges();

        //spyOn(image, 'clientWidth').and.returnValue(800);
        //spyOn(image, 'clientHeight').and.returnValue(600);

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    fit('markerToPixel', () => {
        let image = fixture.debugElement.nativeElement.querySelector('img');
        image.src = "/assets/aiat-home.png";
        spyOn(image, 'clientWidth').and.returnValue(800);
        spyOn(image, 'clientHeight').and.returnValue(600);
        fixture.detectChanges();

        let result = component["markerToPixel"](
            [0, 100, 0, 100]
        );
        console.log('hier: ', result);
    });

});
