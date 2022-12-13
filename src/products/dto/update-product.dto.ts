import { IsOptional, IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  readonly title: string;
  @IsOptional()
  @IsNumber()
  readonly price: number;
  @IsOptional()
  @IsNumber()
  readonly branchId: number;
}
