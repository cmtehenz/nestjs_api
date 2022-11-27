import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class CreateTimeDTO {
  @IsDate()
  @Type(() => Date)
  public readonly time_registered?: Date;
}
