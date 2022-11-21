import { Injectable } from '@nestjs/common';

@Injectable()
export class MyLibraryService {
  test() {
    return 'testing from library';
  }
}
