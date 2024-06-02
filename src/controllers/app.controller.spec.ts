import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from '../services/app.service';

const mockAppService = {
  getHello: jest.fn(),
};

describe('AppController', () => {
  let appController: AppController;
  let appService: typeof mockAppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockAppService,
        },
      ],
    }).compile();

    appController = moduleRef.get(AppController);
    appService = moduleRef.get(AppService);
  });

  describe('getHello', () => {
    it('should call AppService.getHello', async () => {
      appService.getHello.mockResolvedValue('Hello World!');
      const actual = await appController.getHello();
      expect(actual).toBe('Hello World!');
      expect(appService.getHello).toHaveBeenCalledTimes(1);
    });
  });
});
