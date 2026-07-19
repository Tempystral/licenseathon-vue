import { useAssetReplicant } from "nodecg-vue-composable";
import { Ref } from "vue";

export interface AssetFile {
  sum: string;
  base: string;
  ext: string;
  name: string;
  namespace: string;
  category: string;
  url: string;
}

export function withAssets(group: string) {
  const assets = useAssetReplicant(group, "licenseathon-vue") as unknown as Ref<
    AssetFile[],
    AssetFile[]
  >;

  function getAsset(name: string) {
    return assets.value.find((asset) => asset.name === name);
  }

  return { getAsset, assets };
}
