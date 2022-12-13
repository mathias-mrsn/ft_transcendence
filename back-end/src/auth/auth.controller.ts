import { AuthGuard } from '@nestjs/passport';
import { Controller } from '@nestjs/common';
import { Post, Body, Header, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService)
    { }

    // https://api.intra.42.fr/apidoc/guides/web_application_flow

    @Get("check")
    @UseGuards(AuthGuard("42"))
    check() {
        return {
            message: "You are logged in"
        };
    }

    // @Get('signup')
    // signUp(@Body() authHeader: string) {
    //     this.authService.signUp();
    // }

    @Get('test')
    @UseGuards(AuthGuard("42"))
    test() {
        return {
            message: "You are logged in"
        };
    }

}
