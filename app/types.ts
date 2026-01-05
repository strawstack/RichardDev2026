export type Pos = [number, number];

export type ColorMap = {[key: string]: string};

export enum Kind {
  Flat = "FLAT",
  Left = "LEFT",
  Right = "RIGHT",
  Center = "CENTER",
};

export enum Color {
  Gray = "GRAY",
  Red = "RED",
  Yellow = "Yellow",
  Green = "GREEN",
  Blue = "BLUE",
  Indigo = "INDIGO",
  Purple = "PURPLE",
  Pink = "PINK",
};

export type TileData = [number, number, Kind, Color];

export type IslandGrid = string[];