export interface ILocation {
  state: TState;
}

export type TState = { from?: { pathname?: string } | null };
