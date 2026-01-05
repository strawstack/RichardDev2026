import { Color, Kind, type ColorMap } from "./types";

export const color500: ColorMap = {
    [Color.Gray]: "fill-gray-500",
    [Color.Red]: "fill-red-500",
    [Color.Yellow]: "fill-yellow-500",
    [Color.Green]: "fill-green-500",
    [Color.Blue]: "fill-blue-500",
    [Color.Indigo]: "fill-indigo-500",
    [Color.Purple]: "fill-purple-500",
    [Color.Pink]: "fill-pink-500",
};

export const color600: ColorMap = {
    [Color.Gray]: "fill-gray-600",
    [Color.Red]: "fill-red-600",
    [Color.Yellow]: "fill-yellow-600",
    [Color.Green]: "fill-green-600",
    [Color.Blue]: "fill-blue-600",
    [Color.Indigo]: "fill-indigo-600",
    [Color.Purple]: "fill-purple-600",
    [Color.Pink]: "fill-pink-600",
};

export const color700: ColorMap = {
    [Color.Gray]: "fill-gray-700",
    [Color.Red]: "fill-red-700",
    [Color.Yellow]: "fill-yellow-700",
    [Color.Green]: "fill-green-700",
    [Color.Blue]: "fill-blue-700",
    [Color.Indigo]: "fill-indigo-700",
    [Color.Purple]: "fill-purple-700",
    [Color.Pink]: "fill-pink-700",
};

export const color800: ColorMap = {
    [Color.Gray]: "fill-gray-800",
    [Color.Red]: "fill-red-800",
    [Color.Yellow]: "fill-yellow-800",
    [Color.Green]: "fill-green-800",
    [Color.Blue]: "fill-blue-800",
    [Color.Indigo]: "fill-indigo-800",
    [Color.Purple]: "fill-purple-800",
    [Color.Pink]: "fill-pink-800",
};

export const kindLookup: {[key in Kind]: string} = {
    [Kind.Flat]: "O",
    [Kind.Left]: "<",
    [Kind.Right]: "V",
    [Kind.Center]: "X",
};

export const colorLookup: {[key in Color]: number} = {
    [Color.Gray]: 0,
    [Color.Red]: 1,
    [Color.Yellow]: 2,
    [Color.Green]: 3,
    [Color.Blue]: 4,
    [Color.Indigo]: 5,
    [Color.Purple]: 6,
    [Color.Pink]: 7,
};

export const numToColor = [
    Color.Gray,
    Color.Red,
    Color.Yellow,
    Color.Green,
    Color.Blue,
    Color.Indigo,
    Color.Purple,
    Color.Pink,
];

export const colorBg500: ColorMap = {
    [Color.Gray]: "bg-gray-500",
    [Color.Red]: "bg-red-500",
    [Color.Yellow]: "bg-yellow-500",
    [Color.Green]: "bg-green-500",
    [Color.Blue]: "bg-blue-500",
    [Color.Indigo]: "bg-indigo-500",
    [Color.Purple]: "bg-purple-500",
    [Color.Pink]: "bg-pink-500",
};

export const colorBg600: ColorMap = {
    [Color.Gray]: "bg-gray-600",
    [Color.Red]: "bg-red-600",
    [Color.Yellow]: "bg-yellow-600",
    [Color.Green]: "bg-green-600",
    [Color.Blue]: "bg-blue-600",
    [Color.Indigo]: "bg-indigo-600",
    [Color.Purple]: "bg-purple-600",
    [Color.Pink]: "bg-pink-600",
};

export const colorBg700: ColorMap = {
    [Color.Gray]: "bg-gray-700",
    [Color.Red]: "bg-red-700",
    [Color.Yellow]: "bg-yellow-700",
    [Color.Green]: "bg-green-700",
    [Color.Blue]: "bg-blue-700",
    [Color.Indigo]: "bg-indigo-700",
    [Color.Purple]: "bg-purple-700",
    [Color.Pink]: "bg-pink-700",
};

export const colorBg800: ColorMap = {
    [Color.Gray]: "bg-gray-800",
    [Color.Red]: "bg-red-800",
    [Color.Yellow]: "bg-yellow-800",
    [Color.Green]: "bg-green-800",
    [Color.Blue]: "bg-blue-800",
    [Color.Indigo]: "bg-indigo-800",
    [Color.Purple]: "bg-purple-800",
    [Color.Pink]: "bg-pink-800",
};