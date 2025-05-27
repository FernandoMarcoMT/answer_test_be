import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { GoogleStrategy } from "./strategies/google.strategy";
import { JwtStrategy } from "./strategies/jwt.strategies";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    
    controllers: [AuthController],
    providers: [AuthService, GoogleStrategy, JwtStrategy]
})
export class AuthModule {}