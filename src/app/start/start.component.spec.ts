import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import { TheBigTreeComponent } from '../the-big-tree/the-big-tree.component';

describe('StartComponent', () => {
    let component: StartComponent;
    let fixture: ComponentFixture<StartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StartComponent,
                TheBigTreeComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
