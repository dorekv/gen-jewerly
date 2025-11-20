
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registration } from './registration';
import { FormsModule } from '@angular/forms';

describe('Registration Component', () => {
  let component: Registration;
  let fixture: ComponentFixture<Registration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registration, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Registration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  fit('should have default values set correctly', () => {
    expect(component.nameTextInput).toBe('');
    expect(component.numericInput).toBe(0);
    expect(component.stringInput).toBe('');
    expect(component.numericSelect).toBe(0);
    expect(component.checkboxInput).toBe(false);
    expect(component.radioInput).toBe(1);
    expect(component.citySelectOptions.length).toBe(5);
  });
  
  fit('getType should return empty string for null/undefined', () => {
    expect(component.getType(null)).toBe('');
    expect(component.getType(undefined)).toBe('');
  });

  fit('getType should return proper JS type', () => {
    expect(component.getType(123)).toBe('number');
    expect(component.getType('hello')).toBe('string');
    expect(component.getType(true)).toBe('boolean');
    expect(component.getType({})).toBe('object');
  });

});