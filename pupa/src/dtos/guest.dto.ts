class Guest {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly eventId?: string;
}

export type FullGuest = Guest;
export type NewGuest = Omit<Guest, 'id'>;
