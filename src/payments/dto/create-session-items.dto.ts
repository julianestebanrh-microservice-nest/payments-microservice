import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateSessionItemsDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
