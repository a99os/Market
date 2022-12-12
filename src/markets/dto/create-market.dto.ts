import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMarketDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
