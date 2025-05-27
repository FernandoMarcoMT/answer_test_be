import { PassportStrategy } from "@nestjs/passport";
import { Strategy, VerifyCallback } from "passport-google-oauth20";

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: 'http://localhost:3000/auth/google/redirect',
            scope: ['email']
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback ): Promise<any> {
        const email = profile?.emails?.[0]?.value;

        const user = {
            email
        }

        done(null, user);
    }

}