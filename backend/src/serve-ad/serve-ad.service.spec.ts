import { Test, TestingModule } from '@nestjs/testing';
import { ServeAdService } from './serve-ad.service';

describe('ServeAdService', () => {
  let service: ServeAdService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServeAdService],
    }).compile();

    service = module.get<ServeAdService>(ServeAdService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
