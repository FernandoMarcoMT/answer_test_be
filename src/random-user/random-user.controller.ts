import { Controller, Get, ParseIntPipe, Query } from "@nestjs/common";
import { TQueryParams } from "./dto/random-user.dto";
import { RandomUserService } from "./random-user.service";


@Controller('random-user')
export class RandomUserController {
    constructor(private randomUserService: RandomUserService){}

    @Get()
    async getRestructuredUser(
        @Query('results', new ParseIntPipe({ optional: true })) results?: number,
        @Query('page', new ParseIntPipe({ optional: true })) page?: number,
        @Query('search') search?: string,
    ) {
        const query: TQueryParams = {
            results,
            page,
            search
        }
        const data = await this.randomUserService.getRestructuredUsers(query);
        
        return data;
    }
}