import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseInPipe implements PipeTransform<string, number> {
  transform(value: string):number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
        throw new BadRequestException('Validation failed');
    }
    return val;
  }
}