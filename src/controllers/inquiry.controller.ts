import { Controller, Get } from '@nestjs/common';
import { InquiryService } from '../services/inquiry.service';
import { InquiryResponse } from '../types/responses/inquiry.response';

@Controller()
export class InquiryController {
  constructor(private readonly inquiryService: InquiryService) {}

  @Get('/inquiries')
  async get(): Promise<InquiryResponse> {
    const data = await this.inquiryService.get();
    return {
      statusCode: 200,
      message: 'Success',
      data: data,
    };
  }
}
