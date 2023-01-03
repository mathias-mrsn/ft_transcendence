import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (
        private userService: UserService,
    ) { }

    @Get("/id/:id")
    @UseGuards(AuthGuard("42"))
    async get_user_by_id(@Param("id", ParseIntPipe) id: number) {
        return await this.userService.get_user_by_id(id);
    }
}
