import { IsOptional, IsString } from "class-validator";

export class UserGoogleDto {
    @IsString()
    email: string
}

export class UserDto {
    @IsString()
    @IsOptional()
    id: string
    
    @IsString()
    username: string
}