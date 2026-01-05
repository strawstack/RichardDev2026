import { Color, Kind, type IslandGrid, type TileData } from "./types";
import { numToColor } from "./utils";

type GridCell = [number, Kind, Color];
type CellLookup = {[key: string]: Kind};

const GW = 44;
const GH = 22;
const GD = 8;

export const basic: IslandGrid = [
    "2O 3O 3< 4O 4O",
    "2< 3O 3X 3V 3O",
    "2O 3O 4O 3O 2O",
    "2O 2V 3O 2O 0O",
    "2< 3O 2O 1O 1O",
];

export const basic2: IslandGrid = [
    "2O 0O 1O 0O 0O",
    "0O 0O 1V 0O 0O",
    "0O 0O 0O 0O 0O",
    "0O 0O 0O 0O 0O",
    ".O 0O 0O 0O 0O",
];

const cellLookup: CellLookup = {
    'O': Kind.Flat,
    'X': Kind.Center,
    '<': Kind.Left,
    'V': Kind.Right,
};

function parseCell(cell: string) {
    return cellLookup[cell];
}

export function gridToArray(grid: IslandGrid): TileData[] {
    const arr: TileData[] = [];
    for (let ys in grid) {
        const y = parseInt(ys, 10);
        const row = grid[y];
        const rowSplit = row.split(" ");
        const SIZE = rowSplit.length;
        const SIZE_1 = rowSplit.length - 1;
        row.split(" ").reverse()
            .map<GridCell>(cell => [(cell[0] === ".") ? -1 : parseInt(cell[0], 10), parseCell(cell[1]), numToColor[parseInt(cell[2], 10)]])
            .map(([n, kind, color], x) => {
                for (let d = 0; d <= n; d++) {
                    arr.push([
                        (SIZE_1 - x) * GW/2 + y * GH,
                        y * GH/2 + x * GH/2 + (SIZE_1 - d) * GD,
                        (d < n) ? Kind.Flat : kind,
                        color
                    ]);
                }
            });
    }
    return arr;
} 

export function generateIsland(SIZE: number) {
    const island = [];
    for (let y = 0; y < SIZE; y++) {
        let row = [];
        for (let x = 0; x < SIZE; x++) {
            row.push("0O");
        }
        island.push(row.join(" "));
    }
    // island[0] = "0O 2O 3< 3O"
    return gridToArray(island);
}