import { Test } from '@nestjs/testing';
import { InquiryService } from './inquiry.service';
import { InquiryRepository } from '../repositories/inquiry.repository';

const mockInquiryRepository = {
  get: jest.fn(),
};

describe('InquiryService', () => {
  let inquiryService: InquiryService;
  let inquiryRepository: typeof mockInquiryRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        InquiryService,
        {
          provide: InquiryRepository,
          useValue: mockInquiryRepository,
        },
      ],
    }).compile();

    inquiryService = moduleRef.get(InquiryService);
    inquiryRepository = moduleRef.get(InquiryRepository);
  });

  describe('get', () => {
    it('repositoryからの返却値をレスポンスデータの型に変換して返却できること', () => {
      mockInquiryRepository.get.mockResolvedValue([
        {
          id: 1,
          title: 'タイトル',
          content: '内容',
          createdAt: new Date('2021-01-01T00:00:00Z'),
          updatedAt: new Date('2021-01-01T00:00:00Z'),
        },
      ]);

      const expected = [
        {
          id: 1,
          title: 'タイトル',
          content: '内容',
          createdAt: '2021-01-01T00:00:00.000Z',
          updatedAt: '2021-01-01T00:00:00.000Z',
        },
      ];
      const actual = inquiryService.get();

      expect(actual).resolves.toStrictEqual(expected);
      expect(inquiryRepository.get).toHaveBeenCalledTimes(1);
    });
  });
});
