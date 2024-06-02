import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { InquiryController } from './controllers/inquiry.controller';
import { AppService } from './services/app.service';
import { InquiryService } from './services/inquiry.service';
import { InquiryRepository } from './repositories/inquiry.repository';

@Module({
  imports: [],
  controllers: [AppController, InquiryController],
  providers: [AppService, InquiryService, InquiryRepository],
})
export class AppModule {}
