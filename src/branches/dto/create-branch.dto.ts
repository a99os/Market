import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly address: string;
  @IsNumber()
  readonly marketId: number;
}
