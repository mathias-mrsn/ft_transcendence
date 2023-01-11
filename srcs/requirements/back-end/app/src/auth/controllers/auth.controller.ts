import { RegisterDTO } from './../dtos/register.dto';
import {
    Body,
    Controller,
    Get,
    Post
} from '@nestjs/common';

@Controller('auth')
export class AuthController {

    // @Post('/register')
    // register (@Body() dto) {
    //     return {
    //         text: 'Register'
    //     };
    // }
    //

    @Get('/logout')
    //

    @Post('/login')
    login () {

    }
    //
}
