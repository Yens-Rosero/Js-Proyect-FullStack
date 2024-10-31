export class TaskEntity {
  id: number;

  title: string;

  description?: string;

  status: 'pending' | 'in progress' | 'completed';

  userId: number;
}
