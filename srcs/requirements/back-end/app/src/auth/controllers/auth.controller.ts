import { AuthGuard } from '@nestjs/passport';
import { Controller, Req, Res } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { IntraGuard } from '../guards/intra.guard';

// @ApiTags('Authentification with 42 API')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService)
    { }

    // https://api.intra.42.fr/apidoc/guides/web_application_flow

    @Get("check")
    @UseGuards(IntraGuard)
    check () {
        return {
            message: "You are logged in"
        };
    }

    @Get('login')
    @UseGuards(IntraGuard)
    login () {
        console.log("login");
        return {
            data: "login"
        }
    }


    // @Get('signup')
    // signUp(@Body() authHeader: string) {
    //     this.authService.signUp();
    // }

    @Get('test')
    @UseGuards(IntraGuard)
    test () {
        return {
            message: "You are logged in"
        };
    }

    @Get('test2')
    // @UseGuards(IntraGuard)
    test2 () {
        return {
            message: "You are logged in"
        };
    }

    @Get('callback')
    @UseGuards(IntraGuard)
    callback (@Req() req: any, @Res() res: any) {

        console.log("callback");
        // res.redirect('http://localhost:3000/api/auth/check'); // Redirection to the front home page
        res.send('http://localhost:3030');
    }

}

