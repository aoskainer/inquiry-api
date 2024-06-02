import { Test } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = moduleRef.get(AppService);
  });

  describe('getHello', () => {
    it('Hello World!を返却すること', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });
  });
});
