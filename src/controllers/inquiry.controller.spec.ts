import { Test } from '@nestjs/testing';
import { InquiryController } from './inquiry.controller';
import { InquiryService } from '../services/inquiry.service';

const mockInquiryService = {
  get: jest.fn(),
};

describe('InquiryController', () => {
  let inquiryController: InquiryController;
  let inquiryService: typeof mockInquiryService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [InquiryController],
      providers: [
        {
          provide: InquiryService,
          useValue: mockInquiryService,
        },
      ],
    }).compile();

    inquiryController = moduleRef.get(InquiryController);
    inquiryService = moduleRef.get(InquiryService);
  });

  describe('get', () => {
    it('serviceから返却された値を使ってレスポンスを返却できること', async () => {
      inquiryService.get.mockResolvedValue({
        id: 1,
        title: 'タイトル',
        content: '内容',
        createdAt: '2021-01-01T00:00:00Z',
        updatedAt: '2021-01-01T00:00:00Z',
      });

      const expected = {
        statusCode: 200,
        message: 'Success',
        data: {
          id: 1,
          title: 'タイトル',
          content: '内容',
          createdAt: '2021-01-01T00:00:00Z',
          updatedAt: '2021-01-01T00:00:00Z',
        },
      };
      const actual = await inquiryController.get();

      expect(actual).toStrictEqual(expected);
      expect(inquiryService.get).toHaveBeenCalledTimes(1);
    });
  });
});
