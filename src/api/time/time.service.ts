import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTimeDTO } from './time.dto';
import { Time } from './time.entity';
import { User } from '../user/user.entity';

@Injectable()
export class TimeService {
  @InjectRepository(Time)
  private readonly repository: Repository<Time>;

  public async registerTime(body: CreateTimeDTO, user: any): Promise<Time> {
    if (user.role !== 'employee') {
      throw new ForbiddenException(
        `It is necessary be a employee to register time`,
      );
    }

    const time_registered = new Date(body.time_registered);

    console.log(user.id);

    const newTime = await this.repository.save({
      userId: user.id,
      time_registered,
    });

    return newTime;
  }

  public async listAll(user: any): Promise<Time[]> {
    if (user.role !== 'admin') {
      throw new ForbiddenException(
        `It is necessary be a admin to list all time`,
      );
    }

    const result = await this.repository.find();
    return result;
  }
}
