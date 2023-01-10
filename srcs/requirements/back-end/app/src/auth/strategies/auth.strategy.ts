import { PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import { Strategy } from "passport-jwt";

export class AuthStrategy extends PassportStrategy(Strategy, 'local') {

    constructor() {
        super();
    }

    async validate (username: string, password: string) {
        // Search for a user
    }
}