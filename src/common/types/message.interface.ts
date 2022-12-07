export interface IMessage {
  id: string;
  user: string;
  text: string;
  type: TMessageType;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TMessageType = 'user' | 'server';
