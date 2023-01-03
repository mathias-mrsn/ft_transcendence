import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { AuthDTO } from 'src/auth/dtos/auth.dto';
import {UserEntity} from './entities/user.entity';
import { UserDTO } from './dtos/user.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private readonly httpService: HttpService,
    ) { }

    async find_user_by_DTO (auth: AuthDTO) : Promise<UserDTO | undefined>{
        const user = await this.prisma.user.findUnique({
            where: {
                login: auth.login,
            }
        });
        if (!user) {
            return undefined;
        }
        return user;    
    }

    async create_user (auth: AuthDTO) : Promise<UserDTO> {
        const user = this.prisma.user.create({
            data: {
                login: auth.login,
                first_name: auth.first_name,
                last_name: auth.last_name,
                email: auth.email,
            }
        });
        return user;
    }

    // TODO: add to the auth service

    async fetch_token_owner (access_token : string ) : Promise<AuthDTO | undefined> {
        const getUser = await lastValueFrom(
            this.httpService.get('https://api.intra.42.fr/v2/me', {
                headers: { Authorization: 'Bearer ' + access_token },
            })
        )
        const {login, first_name, last_name, email} = getUser.data;
        const user: AuthDTO = {
            login: login,
            first_name: first_name,
            last_name: last_name,
            email: email
        }

        return user;
    }

    async get_user_by_id (id : number) : Promise<UserDTO | undefined> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            }
        });
        if (!user) {
            return undefined;
        }
        return user;    
    }
}
