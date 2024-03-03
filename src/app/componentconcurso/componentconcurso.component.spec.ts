import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentconcursoComponent } from './componentconcurso.component';

describe('ComponentconcursoComponent', () => {
  let component: ComponentconcursoComponent;
  let fixture: ComponentFixture<ComponentconcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentconcursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentconcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
