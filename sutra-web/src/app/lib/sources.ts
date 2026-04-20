import type { SourceData, SourceRef } from "../types";

let cache: SourceData | null = null;
let loading: Promise<SourceData> | null = null;

function mergeSources(...sources: SourceData[]): SourceData {
  const merged: SourceData = {};
  for (const source of sources) {
    for (const [id, refs] of Object.entries(source)) {
      if (!merged[id]) merged[id] = [];
      merged[id].push(...refs);
    }
  }
  return merged;
}

export function loadSourceData(): Promise<SourceData> {
  if (cache) return Promise.resolve(cache);
  if (!loading) {
    loading = Promise.all([
      import("../data/sources/generated/vivekachudamani.json"),
      import("../data/sources/generated/brahma-sutra-bhashya.json"),
      import("../data/sources/generated/ashtadhyayi.json"),
    ]).then(([vc, bsb, ash]) => {
      cache = mergeSources(
        vc.default as SourceData,
        bsb.default as SourceData,
        ash.default as SourceData,
      );
      return cache;
    }).catch((err) => {
      loading = null;
      throw err;
    });
  }
  return loading;
}
