import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

class Guest {
  @IsNotEmpty()
  @IsUUID(4)
  readonly id: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly username: string;
}

export type FullGuest = Guest;
export type NewGuest = Omit<Guest, 'id'>;
