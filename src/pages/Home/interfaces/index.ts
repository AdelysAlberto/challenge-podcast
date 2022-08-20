export interface ICard {
  image: string,
  title: string,
  author: string,
  id: string,
}


export interface Icon {
  label: string;
}

export interface IPodCastList {
  category: Category;
  id: ID;
  "im:artist": IMArtist;
  "im:contentType": IMContentType;
  "im:image": IMImage[];
  "im:name": Icon;
  "im:releaseDate": IMReleaseDate;
  link: Link;
  rights?: Icon;
  summary: Icon;
  title: Icon;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  "im:id": string;
  label: PurpleLabel;
  scheme: string;
  term: PurpleLabel;
}

export enum PurpleLabel {
  Music = "Music",
  MusicCommentary = "Music Commentary",
  MusicHistory = "Music History",
  MusicInterviews = "Music Interviews",
}

export interface ID {
  attributes: IDAttributes;
  label: string;
}

export interface IDAttributes {
  "im:id": string;
}

export interface IMArtist {
  attributes?: IMArtistAttributes;
  label: string;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  label: FluffyLabel;
  term: FluffyLabel;
}

export enum FluffyLabel {
  Podcast = "Podcast",
}

export interface IMImage {
  attributes: IMImageAttributes;
  label: string;
}

export interface IMImageAttributes {
  height: string;
}


export enum IMPriceLabel {
  Get = "Get",
}

export interface IMReleaseDate {
  attributes: Icon;
  label: Date;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  href: string;
  rel: Rel;
  type?: Type;
}

export enum Rel {
  Alternate = "alternate",
  Self = "self",
}

export enum Type {
  TextHTML = "text/html",
}
