import { Test, TestingModule } from '@nestjs/testing';
import { ServeAdController } from './serve-ad.controller';

describe('ServeAdController', () => {
  let controller: ServeAdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServeAdController],
    }).compile();

    controller = module.get<ServeAdController>(ServeAdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
