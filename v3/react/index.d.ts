declare module "@parcellab/js-plugin-utils/v3/react" {
  import type React from "react";

  export interface PluginOptionsType {
    options?: object;
    disableDefaultStyles?: boolean;
  }

  const TrackAndTrace: React.FC<PluginOptionsType>;

  export default TrackAndTrace;
}
