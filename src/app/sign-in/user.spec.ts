import { TestBed } from '@angular/core/testing';
import { createUser, areSameUser, isValidEmail, hasPass } from './user.model';

describe('User model test', () => {
 
  beforeEach(() => { });

  fit('should create user with default empty values', () => {
    const user = createUser({});

    expect(user.name).toBe('');
    expect(user.surname).toBe('');
    expect(user.email).toBe('');
    expect(user.password).toBeUndefined();
  });

  fit('should validate correct email', () => {
    const user = { email: 'test@mail.com', name: '', surname: '' };
    expect(isValidEmail(user)).toBeTrue();
  });

  
  fit('should return true when user has password', () => {
    const user = { email: 'a@a.com', password: '1234' };
    expect(hasPass(user)).toBeTrue();
  });


  fit('should detect same users by email', () => {
    const a = { email: 'x@mail.com', name: 'A', surname: 'A' };
    const b = { email: 'x@mail.com', name: 'B', surname: 'B' };

    expect(areSameUser(a, b)).toBeTrue();
  }); 

});