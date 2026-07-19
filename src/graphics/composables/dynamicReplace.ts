import { ComputedRef } from "vue";

export function usingDynamicReplace(refs: ComputedRef[]) {
  function unescape(input: string) {
    return input.replaceAll("%", "");
  }

  function replaceRef(input: string) {
    const match = input.match(/\%\w+\%/gi)?.[0];
    if (!match) {
      return input;
    }
    const ref = refs.value[unescape(match) as keyof typeof refs.value];
    return input.split(match).join(`${ref}`);
  }
}
