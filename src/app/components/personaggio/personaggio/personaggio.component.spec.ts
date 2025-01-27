import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaggioComponent } from './personaggio.component';

describe('PersonaggioComponent', () => {
  let component: PersonaggioComponent;
  let fixture: ComponentFixture<PersonaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaggioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
