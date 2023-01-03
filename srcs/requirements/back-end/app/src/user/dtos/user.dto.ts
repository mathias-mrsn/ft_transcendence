import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UserDTO {

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    login: string;

    @IsString()
    avatarUrl: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    state: boolean;

    lastActivity: Date;

}

/*

id Int @id @default(autoincrement())

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  login String @unique

  avatarUrl String?

  email String @unique

  firstName String?
  lastName String?

  state Boolean @default(false) // true - inactive, false - active,

  lastActivity DateTime? // last activity date

  */