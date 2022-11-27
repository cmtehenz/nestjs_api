import {
  Body,
  ClassSerializerInterceptor,
  Controller,
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
import { Time } from './time.entity';

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
    return this.service.registerTime(body, req);
  }
}
