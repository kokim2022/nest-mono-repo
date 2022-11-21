import { Injectable } from '@nestjs/common';
import { MyLibraryService } from '../../../libs/my-library/src/my-library.service';

@Injectable()
export class AppService {
  constructor(private readonly libraryService: MyLibraryService) {}
  getHello(): string {
    return this.libraryService.test();
  }
}
