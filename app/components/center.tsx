import * as d3 from "d3";
import type { Pos } from "../types";
import { color500, color800 } from "../utils";

export function Center({color, ...props}: {color: string, [key: string]: any}) {
  const {
    factor,
    transform,
    left
  } = props;
  const line = d3.line();
  const scale = ([x, y]: Pos): Pos => [factor * x, factor * y];
  const top: Pos[] = ([[22, 0], [44, 19], [22, 30], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));
  const mask: [number, number][] = ([[22, 2], [41, 19], [22, 28], [3, 19]] as Pos[]).map<Pos>((e) => scale(e));
  const bottom: [number, number][] = ([[22, 8], [44, 19], [22, 30], [0, 19]] as Pos[]).map<Pos>((e) => scale(e));

  return <>
    <defs>
      <mask id="center-mask">
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
        className={`stroke-0 ${color800[color]}`}
      />
      <path
        d={ line(top)! }
        mask="url(#center-mask)"
        className={`stroke-0 ${color800[color]}`}
      />
      <path
        d={ line(top)! }
        className={`stroke-0 ${color500[color]} opacity-95`}
      />
    </g>
  </>;
}