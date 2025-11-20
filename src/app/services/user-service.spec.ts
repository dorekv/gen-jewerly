import { IUser } from '../sign-in/user.model';
import { BehaviorSubject } from 'rxjs';

describe('UserService Jasmine Mock', () => {
  let user$: BehaviorSubject<IUser | null>;
  let serviceMock: jasmine.SpyObj<any>;  

  beforeEach(() => {
    user$ = new BehaviorSubject<IUser | null>(null);

    serviceMock = jasmine.createSpyObj('UserService', ['getUser']);

    serviceMock.getUser.and.returnValue(user$.asObservable());
  });

  it('should return null as the initial user', (done) => {
    serviceMock.getUser().subscribe((value: IUser | null) => {
      expect(value).toBeNull();
      done();
    });
  });

  it('should emit new user value when BehaviorSubject updates', (done) => {
    const mockUser: IUser = {
      name: 'Anna',
      surname: 'Red',
      email: 'anna@mail.com',
      password: '1234'
    };

    user$.next(mockUser);

    serviceMock.getUser().subscribe((value: IUser | null) => {
      expect(value).toEqual(mockUser);
      done();
    });
  });

  it('should call getUser()', () => {
    serviceMock.getUser();
    expect(serviceMock.getUser).toHaveBeenCalled();
  });

});