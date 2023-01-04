import { Injectable, Req } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
// import { Strategy, ExtractJwt } from "passport-jwt";
import { Strategy } from 'passport-oauth2';

import { HttpService } from '@nestjs/axios';


import { Response, Request } from 'express';
import { lastValueFrom, map } from "rxjs";
import { AuthDTO } from "../dtos/auth.dto";
import { UserService } from "app/src/user/user.service";


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
              'u-s4t2ud-67f3ca21dd11c42d7baa01cbf9e6a99de9d3284aec7b0c5d11fd420d0d2373d1',
            clientSecret:
              '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',
            callbackURL: 'http://localhost:3000/api/auth/callback',
            scope: ['public'],
            redirect_uri: 'http://localhost:3000/api/auth/check',
        });
    }

    async validate (
        accessToken : string,
        refreshToken : string,
        profile : any,
        cb : any
    ) {
        const auth_dto : AuthDTO = await this.userService.fetch_token_owner(accessToken);

        console.log("salut")
        let user = await this.userService.find_user_by_DTO(auth_dto);
        if (user === undefined) {
            user = await this.userService.create_user(auth_dto);
        }

        return (cb(null, profile));
    } 

    
}

