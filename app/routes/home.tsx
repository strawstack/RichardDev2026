import { useEffect, useState } from "react";
import { Color, Kind, type IslandGrid, type TileData } from "../types";
import { Center } from "../components/center";
import { Ramp } from "../components/ramp";
import { Tile } from "../components/tile";
import type { Route } from "./+types/home";
import { gridToArray } from "../islands";
import { colorBg500, colorLookup, kindLookup } from "../utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RichardDev" },
    { name: "description", content: "Personal Portfolio Site" },
  ];
}

export default function Home() {
  const factor = 3;
  const GD = 8;
  const SIZE = 4;
  
  const [heights, setHeights] = useState(Array(SIZE*SIZE).fill(0));
  const [kinds, setKinds] = useState<Kind[]>(Array(SIZE*SIZE).fill(Kind.Flat));
  const [colors, setColors] = useState<Color[]>(Array(SIZE*SIZE).fill(Color.Gray));
  const [island, setIsland] = useState<IslandGrid>(Array(SIZE).fill(null).map(v => Array(SIZE).fill("0O").join(" ")));
  
  useEffect(() => {
    const newIsland = [];
    for (let y = 0; y < SIZE; y++) {
        let row = [];
        for (let x = 0; x < SIZE; x++) {
            row.push(`${heights[SIZE * y + x]}${kindLookup[kinds[SIZE * y + x]]}${colorLookup[colors[SIZE * y + x]]}`);
        }
        newIsland.push(row.join(" "));
    }
    setIsland(newIsland);
  }, [heights, kinds, colors]);

  const basic = gridToArray(island);
  const tiles = (basic as TileData[]).map(([x, y, kind, color]: TileData, i) => {
    if (Kind.Flat === kind) {
      return (
        <Tile
          key={i}
          transform={`translate(${x * factor} ${y * factor})`}
          factor={factor}
          color={color}
        ></Tile>
      );

    } else if (Kind.Left === kind) {
      return (
        <Ramp
          key={i}
          left={true}
          transform={`translate(${x * factor} ${y * factor})`}
          factor={factor}
          color={color}
        ></Ramp>
      );

    } else if (Kind.Right === kind) {
      return (
        <Ramp
          key={i}
          left={false}
          transform={`translate(${x * factor} ${y * factor})`}
          factor={factor}
          color={color}
        ></Ramp>
      );
    } else { // Kind.Center
      return (
        <Center
          key={i}
          transform={`translate(${x * factor} ${y * factor})`}
          factor={factor}
          color={color}
        ></Center>
      );
    } 
  });
  
  function handleSetHeight(i: number) {
    const copyHeights = [...heights];
    copyHeights[i] = (copyHeights[i] + 1) % SIZE;
    setHeights(copyHeights);
  }

  const kindRotate = {
    [Kind.Flat]: Kind.Left,
    [Kind.Left]: Kind.Right,
    [Kind.Right]: Kind.Center,
    [Kind.Center]: Kind.Flat,
  };

  const kindDisplay = {
    [Kind.Flat]: "Flat",
    [Kind.Left]: "Left",
    [Kind.Right]: "Right",
    [Kind.Center]: "Center",
  };

  const colorRotate = {
    [Color.Gray]: Color.Red,
    [Color.Red]: Color.Yellow,
    [Color.Yellow]: Color.Green,
    [Color.Green]: Color.Blue,
    [Color.Blue]: Color.Indigo,
    [Color.Indigo]: Color.Purple,
    [Color.Purple]: Color.Pink,
    [Color.Pink]: Color.Gray,
  };

  function handleSetKind(i: number) {
    const copyKinds = [...kinds];
    copyKinds[i] = kindRotate[copyKinds[i]];
    setKinds(copyKinds);
  }

  function handleSetColor(i: number) {
    const copyColors = [...colors];
    copyColors[i] = colorRotate[copyColors[i]];
    setColors(copyColors);
  }

  const cells = Array(SIZE*SIZE).fill(null).map((_, i) => {
    return (
      <div key={i} className="flex flex-col gap-x-1 gap-y-1">
        <div className="flex justify-between">
          <button
            className="px-2 border-2 rounded-md border-gray-700/20 cursor-pointer hover:bg-gray-700/10 transition-all
              w-7 h-7 flex justify-center items-center"
            onClick={() => handleSetHeight(i)}
          >{heights[i]}</button>
          <div
            className={`px-2 border-2 rounded-full border-gray-700/20 cursor-pointer hover:border-gray-700 transition-all
              w-7 h-7 flex justify-center items-center
              ${colorBg500[colors[i]]}`}
            onClick={() => handleSetColor(i)}
          ></div>
        </div>
        <div
          className="px-2 border-2 rounded-full border-gray-700/20 cursor-pointer hover:bg-gray-700/10 transition-all
            flex justify-center items-center select-none"
            onClick={() => handleSetKind(i)}
        >{kindDisplay[kinds[i]]}</div>
      </div>
    );
  });

  const grid = {
    3: {cols: 'grid-cols-[repeat(3,60px)]', rows: 'grid-rows-[repeat(3,60px)]'},
    4: {cols: 'grid-cols-[repeat(4,60px)]', rows: 'grid-rows-[repeat(4,60px)]'},
    5: {cols: 'grid-cols-[repeat(5,60px)]', rows: 'grid-rows-[repeat(5,60px)]'},
  };

  return <div className="p-4 flex flex-col justify-center gap-y-10">
    <div className="flex justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" shapeRendering="crispEdges"
        width={44 * factor * SIZE}
        height={22 * factor * SIZE + 8 * factor + (SIZE - 1) * GD * factor}
      >
        { tiles }
      </svg>
    </div>
    <div className="flex justify-center">
      <div className={`grid ${grid[SIZE].cols} ${grid[SIZE].rows} gap-5`}>
        { cells }
      </div>
    </div>
  </div>;
}
