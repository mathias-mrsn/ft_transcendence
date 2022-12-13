import { Injectable, Req } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
// import { Strategy, ExtractJwt } from "passport-jwt";
import { Strategy } from 'passport-oauth2';

import { HttpService } from '@nestjs/axios';


import { Response, Request } from 'express';
import { lastValueFrom, map } from "rxjs";
import { AuthDTO } from "../dtos/auth.dto";
import { UserService } from "src/user/user.service";


@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42')
{
    constructor (
        private readonly httpService: HttpService,
        private readonly userService: UserService,
    ) {
        super({

            authorizationURL: 'https://api.intra.42.fr/oauth/authorize',
            tokenURL: 'https://api.intra.42.fr/oauth/token',
            clientID:
              'u-s4t2ud-1046981c83859204bb48fb6c00ea886cddc4e165f1a0c19b153f14ef32d8da48',
            clientSecret:
              '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',
            callbackURL: 'http://localhost:3000/api/auth/test',
            scope: ['public'],
        });
    }

    async validate (
        accessToken : string,
        refreshToken : string,
        profile : any,
        cb : any
    ) {
        const auth_dto : AuthDTO = await this.userService.fetch_token_owner(accessToken);

        let user = await this.userService.find_user_by_DTO(auth_dto);
        if (user === undefined) {
            user = await this.userService.create_user(auth_dto);
        }

        return (cb(null, user));
    } 

    
}

