import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources: {
                db : {
                    url: "postgresql://postgres:2YvkI%byW8CXfE^KLLRd*1XUk6fst27gdd6@97loOV@postgres:5432/ft_transcendence_database?schema=public",
                }
            }
        });
    }
}
