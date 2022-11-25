class Guest {
  readonly id: string;
  readonly email: string;
  readonly username: string;
}

export type FullGuest = Guest;
export type NewGuest = Omit<Guest, 'id'>;
