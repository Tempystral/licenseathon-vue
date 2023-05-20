import fitty, { FittyOptions } from 'fitty';

const fitText = (selector: string | string[], options: FittyOptions) => {
  if (Array.isArray(selector)) {
    selector.forEach((sel) => { fitText(sel, options); });
  } else {
    fitty(selector, options).forEach((el) => {
      el.fit();
    });
  }
};

export default fitText;
