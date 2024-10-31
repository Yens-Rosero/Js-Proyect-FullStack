// src/auth/dto/auth-credentials.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
