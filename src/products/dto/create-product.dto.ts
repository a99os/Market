import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsNumber()
  @IsNotEmpty()
  readonly branchId: number;
}
