declare module "@parcellab/js-plugin-utils/v3/react" {
  import type React from "react";

  interface PropsType {
    options?: object;
    disableDefaultStyles?: boolean;
  }

  const TrackAndTrace: React.FC<PropsType>;

  export default TrackAndTrace;
}
