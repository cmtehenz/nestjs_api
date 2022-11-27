import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../user/auth/auth.guard';
import { CreateTimeDTO } from './time.dto';
import { TimeService } from './time.service';
import { User } from '../user/user.entity';
import { Time } from './time.entity';

export interface TypedRequestBody<T> extends Express.Request {
  body: T;
}

@ApiTags('time')
@ApiBearerAuth()
@Controller('time')
export class TimeController {
  @Inject(TimeService)
  private readonly service: TimeService;

  @Post('new')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  private createTime(
    @Body() body: CreateTimeDTO,
    @Req() req: Request,
  ): Promise<Time> {
    const { user } = req;
    return this.service.registerTime(body, user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  private listAll(@Req() req: Request): Promise<Time[]> {
    const { user } = req;
    const times = this.service.listAll(user);
    return times;
  }
}
