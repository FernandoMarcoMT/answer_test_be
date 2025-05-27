import { Injectable } from "@nestjs/common";
import { CheckOutDto, CreateCheckOutDto, ItemDto, VoucherDto } from "./dto/checkout.dto";
import { formatDate } from "src/common/utils/date.util";

@Injectable()
export class CheckoutService {
    checkout(dto: CreateCheckOutDto): CheckOutDto {
        const item = this.getItem();
        const voucher = this.getVoucher();

        if(dto.useVoucher) {
            const discountAmount = item.price * voucher.discount
            const finalPrice= item.price * (1 - voucher.discount)
            const pointAmount =  discountAmount * voucher.convertPoint

            return this.toResponseCheckout(
                item,
                finalPrice,
                voucher,
                pointAmount,
                discountAmount
            );
        }

        return this.toResponseCheckout(
            item,
            item.price
        );
    }


    toResponseCheckout(item: ItemDto, finalPrice: number, voucher?: VoucherDto, pointAmount?: number, discountAmount?: number) {
        return {
            item,
            voucher: voucher ?? null,
            pointAmount: pointAmount ?? null,
            discountAmount: discountAmount ?? null,
            finalPrice,
            date: formatDate(new Date())
        }
    }


    getItem(): ItemDto {
        return {
            name: "Item",
            price: 5000000
        }
    }

    getVoucher(): VoucherDto {
        return {
            discount: 0.5,
            convertPoint: 0.02
        }
    }
}

