import { Injectable } from "@nestjs/common";
import { UserDto, UserGoogleDto } from "./dto/user.dto";
import { PrismaService } from "src/common/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService){}

    async signIn(user: UserGoogleDto) {
        let getUser = await this.prismaService.user.findUnique({
            where: {
                username: user.email
            }
        })    

        if(!getUser) {
            getUser = await this.prismaService.user.create({
                data: {
                    username: user.email
                }
            })
        }
        
        return this.generateAccessToken(getUser);
    }
    generateAccessToken(payload: UserDto){
        return this.jwtService.sign(payload);
    }

}