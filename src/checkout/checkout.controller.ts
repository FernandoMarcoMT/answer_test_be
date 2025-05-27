import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CheckoutService } from "./checkout.service";
import { CheckOutDto, CreateCheckOutDto } from "./dto/checkout.dto";
import { ResponseMessage } from "src/common/decorators/response-message.decorator";

@Controller("checkout")
export class CheckoutController {
    constructor(private readonly checkoutService: CheckoutService){}

    @Post()
    @HttpCode(200)
    @ResponseMessage('Success Checkout!')
    chekcout(@Body() CreateCheckOutDto: CreateCheckOutDto): CheckOutDto {
        const response = this.checkoutService.checkout(CreateCheckOutDto)
        return {
            ...response
        }
    }
    
}