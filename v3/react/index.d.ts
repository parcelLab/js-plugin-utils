declare module "@parcellab/js-plugin-utils/v3/react" {
  import type React from "react";

  interface PropsType {
    options?: Record<string, unknown | never>;
    disableDefaultStyles?: boolean;
  }

  const TrackAndTrace: React.FC<PropsType>;

  export default TrackAndTrace;
}
