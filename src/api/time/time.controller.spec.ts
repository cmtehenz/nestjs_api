import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from '../user/auth/auth.guard';
import { TimeController } from './time.controller';
import { CreateTimeDTO } from './time.dto';
import { TimeService } from './time.service';

const newUser = {
  id: 1,
  name: 'John Due',
  email: 'john.due@gmail.com',
  role: 'admin',
};

describe('TimeController', () => {
  let timeController: TimeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeController],
      providers: [
        {
          provide: JwtAuthGuard,
          useValue: jest.fn().mockImplementation(() => true),
        },
        {
          provide: TimeService,
          useValue: {
            createTime: jest.fn().mockImplementation(() => true),
          },
        },
      ],
    }).compile();

    timeController = module.get<TimeController>(TimeController);
  });

  it('should be defined', () => {
    expect(timeController).toBeDefined();
  });

  it('should be create a new time', () => {
    const time = new Date();
    const body: CreateTimeDTO = {
      time_registered: time,
    };

    // const result = timeController.createTime(body);
  });
});
