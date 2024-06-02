import { Injectable } from '@nestjs/common';
import { InquiryRepository } from '../repositories/inquiry.repository';
import { InquiryResponseData } from '../types/responses/inquiry.response';

@Injectable()
export class InquiryService {
  constructor(private readonly inquiryRepository: InquiryRepository) {}

  async get(): Promise<InquiryResponseData[]> {
    const inquiries = await this.inquiryRepository.get();
    return inquiries.map((inquiry) => ({
      id: inquiry.id,
      title: inquiry.title,
      content: inquiry.content,
      createdAt: inquiry.createdAt.toISOString(),
      updatedAt: inquiry.updatedAt.toISOString(),
    }));
  }
}
