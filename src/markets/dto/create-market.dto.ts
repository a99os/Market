import { IsString } from 'class-validator';

export class CreateMarketDto {
  @IsString()
  readonly name: string;
}
