import * as d3 from "d3";
import type { ColorMap, Pos } from "../types";
import { color500, color600, color800 } from "../utils";

export function Ramp({color, ...props}: {color: string, [key: string]: any}) {
  const {
    factor,
    transform,
    left
  } = props;
  const line = d3.line();
  const scale = ([x, y]: Pos): Pos => [factor * x, factor * y];
  let top: Pos[] = ([[22, 0], [44, 19], [22, 30], [0, 11]] as Pos[]).map<Pos>((e) => scale(e));
  let mask: [number, number][] = ([[22, 2], [41, 19], [22, 28], [3, 11]] as Pos[]).map<Pos>((e) => scale(e));
  let topEdge: [number, number][] = ([[0, 11], [22, 30], [16, 27], [0, 13]] as Pos[]).map<Pos>((e) => scale(e));
  let bottomEdge: [number, number][] = ([[0, 13], [16, 27], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));
  let bottom: [number, number][] = ([[22, 8], [44, 19], [22, 30], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));

  if (left) {
    top = ([[22, 0], [44, 11], [22, 30], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));
    mask = ([[22, 2], [41, 11], [22, 28], [3, 19]] as Pos[]).map<Pos>((e) => scale(e));
    topEdge = ([[44, 11], [44, 13], [28, 27], [22, 30]] as Pos[]).map<Pos>((e) => scale(e));
    bottomEdge = ([[44, 13], [44, 19], [28, 27]] as Pos[]).map<Pos>((e) => scale(e));
    bottom = ([[22, 8], [44, 19], [22, 30], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));
  }

  return <>
    <defs>
      {
        left ? 
          <mask id="ramp-left-mask">
          <path
            d={ line(top)! }
            fill="white"
          />
          <path
            d={ line(mask)! }
            fill="black"
          />
        </mask> :
        <mask id="ramp-right-mask">
          <path
            d={ line(top)! }
            fill="white"
          />
          <path
            d={ line(mask)! }
            fill="black"
          />
        </mask>
      }
    </defs>
    <g transform={transform} >
      <path
        d={ line(bottom)! }
        className={`stroke-0 ${color800[color]}`}
      />
      <path
        d={ line(top)! }
        mask={`url(#${left ? "ramp-left-mask" : "ramp-right-mask"})`}
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