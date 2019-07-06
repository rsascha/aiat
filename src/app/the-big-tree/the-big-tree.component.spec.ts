import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBigTreeComponent } from './the-big-tree.component';

describe('TheBigTreeComponent', () => {
  let component: TheBigTreeComponent;
  let fixture: ComponentFixture<TheBigTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBigTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBigTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
