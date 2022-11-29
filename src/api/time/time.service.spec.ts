import TestUtil from '../../common/test/TestUtil';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Time } from './time.entity';
import { TimeService } from './time.service';
import { ForbiddenException } from '@nestjs/common';

describe('TimeService', () => {
  let timeService: TimeService;

  const mockRepository = {
    save: jest.fn().mockReturnValue(Time),
    find: jest.fn().mockReturnValue([]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TimeService,
        {
          provide: getRepositoryToken(Time),
          useValue: mockRepository,
        },
      ],
    }).compile();

    timeService = module.get<TimeService>(TimeService);
  });

  it('should be defined', () => {
    expect(timeService).toBeDefined();
  });

  describe('registerTime', () => {
    it('should return a exception if role is not employee', () => {
      const user = TestUtil.giveMeAValideUser();
      const body = {
        time_registered: new Date(),
      };
      mockRepository.save(user);

      const regNewTime = timeService.registerTime(body, user);

      expect(regNewTime).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('should register new time', () => {
      const user = TestUtil.giveMeAValideUser();
      user.role = 'employee';

      const body = {
        time_registered: new Date(),
      };
      mockRepository.save(user);

      timeService.registerTime(body, user);
      expect(mockRepository.save).toBeCalledTimes(3);
    });
  });

  describe('listAll', () => {
    it('should return a exception if role is not admin', () => {
      const user = TestUtil.giveMeAValideUser();
      user.role = 'employee';
      const result = timeService.listAll(user);
      expect(result).rejects.toBeInstanceOf(ForbiddenException);
    });

    it('should list All times ', async () => {
      const user = TestUtil.giveMeAValideUser();
      await timeService.listAll(user);
      expect(mockRepository.find).toBeCalledTimes(1);
    });
  });
});
