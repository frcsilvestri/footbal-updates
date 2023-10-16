export interface Standing {
  all?: {
    draw?: number;
    lose?: number;
    played?: number;
    win?: number;
  };
  goalsDiff?: number;
  points?: number;
  rank?:number;
  team?: {
    id?: number;
    logo?: string;
    name?: string;
  }
}