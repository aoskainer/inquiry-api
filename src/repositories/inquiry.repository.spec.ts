import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { InquiryRepository } from './inquiry.repository';

describe('InquiryRepository', () => {
  let inquiryRepository: InquiryRepository;
  let prismaClient: PrismaClient;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [InquiryRepository],
    }).compile();

    inquiryRepository = moduleRef.get(InquiryRepository);
    prismaClient = new PrismaClient();
  });

  afterEach(async () => {
    await prismaClient.$disconnect();
  });

  describe('get', () => {
    it('意図した通りの結果をDBから取得できること', async () => {
      await prismaClient.$executeRaw`TRUNCATE TABLE inquiry;`;
      await prismaClient.inquiry.createMany({
        data: [
          {
            id: 1,
            title: 'Inquiry 1',
            content: 'Content 1',
            createdAt: new Date('2021-01-01T00:00:00Z'),
            updatedAt: new Date('2021-01-01T00:00:00Z'),
          },
        ],
      });

      const expected = [
        {
          id: 1,
          title: 'Inquiry 1',
          content: 'Content 1',
          createdAt: new Date('2021-01-01T00:00:00Z'),
          updatedAt: new Date('2021-01-01T00:00:00Z'),
        },
      ];
      const actual = await inquiryRepository.get();

      expect(actual).toStrictEqual(expected);
    });
  });
});
