export interface Fixture {
  goals?: {
    away: number;
    home: number;
  };
  teams?: {
    away: {
      id: number;
      logo: string;
      name: string;
    };
    home: {
      id: number;
      logo: string;
      name: string;
    }
  }
}