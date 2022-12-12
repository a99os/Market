import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateWorkerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @Matches(/^998([378]{2}|(9[013-57-9]))\d{7}$/gi, {
    message: "O'zbekiston raqamiga mos emas",
  })
  readonly phoneNumber: string;
  @IsNumber()
  @IsNotEmpty()
  readonly branchId: number;
}
