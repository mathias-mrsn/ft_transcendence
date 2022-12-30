import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwt: JwtService,
        // private readonly strategy: JwtStrategy(),      
        )
    { }

    // signUp() {
    //     return this.jwt.sign({user: "test"});
    // }

    // isSign() {
    //     return this.jwt.verify();
    // }
}

//return this.jwt.verifyAsync('token');
