import { Injectable } from '@nestjs/common';
import { Inquiry, PrismaClient } from '@prisma/client';

@Injectable()
export class InquiryRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async get(): Promise<Inquiry[]> {
    return this.prisma.inquiry.findMany();
  }
}
