import fitty, { FittyOptions } from 'fitty';
import { RunData } from 'speedcontrol-util/types';

export const fitText = (selector: string | string[], options: FittyOptions) => {
  if (Array.isArray(selector)) {
    selector.forEach((sel) => { fitText(sel, options); });
  } else {
    fitty(selector, options).forEach((el) => {
      el.fit();
    });
  }
};

export function getPlayers(run:RunData | undefined) {
  return run?.teams?.map((t) => t.players[0]) || [];
}
