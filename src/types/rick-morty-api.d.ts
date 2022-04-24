export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface IData extends IResponse {
  error?: string;
}
export interface IResponse {
  info?: IInfo;
  results?: ICharacter[];
}

interface IInfo {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;
}

interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

export interface IFilterCharacter {
  page?: number;
  status?: "alive" | "dead" | "unknown";
  gender?: "female" | "male" | "genderless" | "unknown";
}
