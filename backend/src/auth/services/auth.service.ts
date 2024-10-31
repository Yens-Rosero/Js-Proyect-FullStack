// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from '../dtos/auth-credentials.dto';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      id: 1,
      username: 'testuser',
      password: 'testpass',
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const user = this.users.find((user) => user.username === username);
    if (user && user.password === password) {
      return { id: user.id, username: user.username };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { username: user.username, id: user.id };
    return {
      payload,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(authCredentialsDto: AuthCredentialsDto) {
    const { username } = authCredentialsDto;

    const userExists = this.users.some((user) => user.username === username);
    if (userExists) {
      throw new UnauthorizedException('User already exists');
    }

    const newUser = { id: Date.now(), ...authCredentialsDto };
    this.users.push(newUser);

    return { message: `User: ${username} creado con éxito` }; // Mensaje de éxito
  }
}
