import { Module } from '@nestjs/common';
import { TimeModule } from './time/time.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, TimeModule],
})
export class ApiModule {}
