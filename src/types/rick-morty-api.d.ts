export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface ICharacterResponse {
  info?: IInfo;
  results?: ICharacter[];
  error?: string;
}

interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IFilterCharacter {
  page?: number;
  status?: "alive" | "dead" | "unknown";
  gender?: "female" | "male" | "genderless" | "unknown";
}

export interface ILocation {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface ILocationResponse {
  info: IInfo;
  results: ILocation;
  error: string;
}
