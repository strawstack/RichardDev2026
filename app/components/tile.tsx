import * as d3 from "d3";
import { type Pos } from "../types";
import { color500, color600, color800 } from "../utils";

export function Tile({color, ...props}: {color: string, [key: string]: any}) {
  const {
    factor,
    transform,
  } = props;
  const line = d3.line();
  const scale = ([x, y]: Pos): Pos => [factor * x, factor * y];
  const top: Pos[] = ([[22, 0], [44, 11], [22, 22], [0, 11]] as Pos[]).map<Pos>((e) => scale(e));
  const mask: [number, number][] = ([[22, 2], [41, 11], [22, 20], [3, 11]] as Pos[]).map<Pos>((e) => scale(e));
  const topEdge: [number, number][] = ([[0, 11], [22, 22], [44, 11], [44, 13], [22, 24], [0, 13]] as Pos[]).map<Pos>((e) => scale(e));
  const bottomEdge: [number, number][] = ([[0, 13], [22, 24], [44, 13], [44, 19], [22, 30], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));
  const bottom: [number, number][] = ([[22, 8], [44, 19], [22, 30], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));

  return <>
    <defs>
      <mask id="mask">
        <path
          d={ line(top)! }
          fill="white"
        />
        <path
          d={ line(mask)! }
          fill="black"
        />
      </mask>
    </defs>
    <g transform={transform} >
      <path
        d={ line(bottom)! }
        className={`stroke-0 fill-gray-800`}
      />
      <path
        d={ line(top)! }
        mask="url(#mask)"
        className={`stroke-0 ${color800[color]}`}
      />
      <path
        d={ line(top)! }
        className={`stroke-0 ${color500[color]} opacity-95`}
      />
      <path
        d={ line(topEdge)! }
        className={`stroke-0 ${color600[color]} opacity-95`}
      />
      <path
        d={ line(bottomEdge)! }
        className={`stroke-0 fill-yellow-700 opacity-95`}
      />
    </g>
  </>;
}