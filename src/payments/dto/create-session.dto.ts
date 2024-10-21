import {
  ArrayMinSize,
  IsArray,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateSessionItemsDto } from './create-session-items.dto';

export class CreateSessionDto {
  @IsString()
  currency: string;

  @IsString()
  orderId: string;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateSessionItemsDto)
  items: CreateSessionItemsDto[];
}
