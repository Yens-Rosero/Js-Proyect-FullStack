import { IsNotEmpty, IsString, IsOptional, IsIn } from 'class-validator';

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['pending', 'in progress', 'completed'])
  status: 'pending' | 'in progress' | 'completed';

  @IsNotEmpty()
  userId: number;
}
