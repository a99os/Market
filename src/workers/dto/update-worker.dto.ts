import { IsOptional, IsNumber, IsString, Matches } from 'class-validator';

export class UpdateWorkerDto {
  @IsString()
  @IsOptional()
  readonly name: string;
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/gi, {
    message: "O'zbekiston raqamiga mos emas",
  })
  readonly phoneNumber: string;
  @IsNumber()
  @IsOptional()
  readonly branchId: number;
}
