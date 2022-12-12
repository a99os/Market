import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsNumber, IsString } from 'class-validator';
import { CreateBranchDto } from './create-branch.dto';

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  @IsOptional()
  @IsString()
  readonly name: string;
  @IsOptional()
  @IsString()
  readonly address: string;
  @IsOptional()
  @IsNumber()
  readonly marketId: number;
}
