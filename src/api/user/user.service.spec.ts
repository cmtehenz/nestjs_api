import TestUtil from '../../common/test/TestUtil';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UpdateNameDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  const mockRepository = {
    save: jest.fn().mockReturnValue(User),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('updateUser', () => {
    it('Should update a user', async () => {
      const user = TestUtil.giveMeAValideUser();
      const body: UpdateNameDto = {
        name: 'updateName',
      };
      user.name = body.name;

      mockRepository.save(user);

      await userService.updateName(body, user);

      expect(mockRepository.save).toBeCalledTimes(2);
    });
  });
});
