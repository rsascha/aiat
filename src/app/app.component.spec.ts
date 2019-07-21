import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImgMapComponent } from './img-map/img-map.component';
import { StartComponent } from './start/start.component';
import { TheBigTreeComponent } from './the-big-tree/the-big-tree.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                HomeComponent,
                ImgMapComponent,
                StartComponent,
                TheBigTreeComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'aiat'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('aiat');
    });

    // it('should render title in a h1 tag', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to aiat!');
    // });
});
