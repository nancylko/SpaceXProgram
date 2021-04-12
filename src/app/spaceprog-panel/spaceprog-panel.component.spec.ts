import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceprogPanelComponent } from './spaceprog-panel.component';

describe('SpaceprogPanelComponent', () => {
  let component: SpaceprogPanelComponent;
  let fixture: ComponentFixture<SpaceprogPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceprogPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceprogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
