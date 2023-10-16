import { Standing } from "./standing";

export interface League {
  league?: {
    country?: string;
    flag?: string;
    id?: number;
    logo?: string;
    name?: string;
    season?: number;
    standings?: Standing[][]
  }
}