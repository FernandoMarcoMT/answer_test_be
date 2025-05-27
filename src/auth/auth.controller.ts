import { Controller, Get, HttpCode, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Response } from "express";
import { ResponseMessage } from "src/common/decorators/response-message.decorator";

@Controller('auth')
@UseGuards(AuthGuard('google'))
export class AuthController {
    constructor(private authService: AuthService){}

    @Get('google')
    async googleAuth() {}

    @Get('google/redirect')
    @HttpCode(200)
    @ResponseMessage("Successfully logged in")
    async googleAuthRedirect(@Req() req, @Res({ passthrough: true }) res: Response) {
        const token = await this.authService.signIn(req.user);
        res.cookie('access_token', token);
    }
}