import {
  IsBoolean,
  IsNumber,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ItemDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;
}

export class VoucherDto {
  @IsNumber()
  discount: number;

  @IsNumber()
  convertPoint: number;
}

export class CheckOutDto {
  @ValidateNested()
  @Type(() => ItemDto)
  item: ItemDto;

  // Voucher bisa null
  @ValidateIf((o) => o.voucher !== null)
  @ValidateNested()
  @Type(() => VoucherDto)
  voucher: VoucherDto | null;

  // discountAmount nullable
  @ValidateIf((o) => o.discountAmount !== null)
  @IsNumber()
  discountAmount: number | null;

  // pointAmount nullable
  @ValidateIf((o) => o.pointAmount !== null)
  @IsNumber()
  pointAmount: number | null;

  @IsNumber()
  finalPrice: number;

  @IsString()
  date: string;
}

export class CreateCheckOutDto {
  @IsBoolean()
  useVoucher: boolean;
}

