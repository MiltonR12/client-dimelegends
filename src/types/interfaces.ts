export interface LoginInfo {
  email: string;
  password: string;
}

export interface User extends LoginInfo {
  firstName: string;
  lastName: string;
  biography: string;
  urlPhoto: string;
}

export interface Page {
  pageName: string;
  urlPage: string;
  urlGroup: string;
  urlImage: string;
}

export interface CardTournament {
  nro: string;
  tournamentName: string;
  dateStart: string;
  game: string;
  cost: string;
  description: string;
  Page: Pick<Page, "pageName" | "urlGroup">;
}

export interface Tournament extends CardTournament {
  formUrl: string | null;
  modality: string[];
  requirements: string[];
  rules: string[];
  award: string[];
}

export interface TournamentComplet extends Tournament {
  Team: {
    teamName: string;
  }[];
}

export interface Record {
  teamID: string;
  teamName: string;
  captain: string;
  phone: string;
  players: string[];
}

export interface Battle {
  battleID: string;
  teamOne: string;
  teamTwo: string;
  battleDate: string;
  battlephase: number;
  battleGroup: string | null;
  battleWinner: string | null;
}
