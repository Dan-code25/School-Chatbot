export type Role = "user" | "bot";

export interface Message {
  id: number;
  role: Role;
  text: string;
}
