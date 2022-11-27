import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { CreateTimeDTO } from './time.dto';
import { Time } from './time.entity';

@Injectable()
export class TimeService {
  @InjectRepository(Time)
  private readonly repository: Repository<Time>;

  public async registerTime(body: CreateTimeDTO, req: Request): Promise<Time> {
    const { user }: any = req;
    if (user.role !== 'employee') {
      throw new ForbiddenException(
        `It is necessary be a employee to register time`,
      );
    }

    const time_registered = new Date(body.time_registered);

    const newTime = await this.repository.save({
      user_id: user.id,
      time_registered,
    });

    return newTime;
  }
}
