import type { MwData } from "../types";

let mwDataCache: MwData | null = null;
let mwDataPromise: Promise<MwData> | null = null;

export function loadMwData(): Promise<MwData> {
  if (mwDataCache) return Promise.resolve(mwDataCache);
  if (!mwDataPromise) {
    mwDataPromise = import("../data/mw-enrichment.json").then((mod) => {
      mwDataCache = mod.default as MwData;
      return mwDataCache;
    });
  }
  return mwDataPromise;
}
