import { Module } from "@nestjs/common";
import { RandomUserController } from "./random-user.controller";
import { RandomUserService } from "./random-user.service";

@Module({
 providers: [RandomUserService],
 controllers: [RandomUserController]
})
export class RandomUserModule {}