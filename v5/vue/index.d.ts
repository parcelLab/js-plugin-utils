declare module "@parcellab/js-plugin-utils/v5/vue" {
  import type React from "react";

  interface Props {
    options?: object;
    disableDefaultStyles?: boolean;
  }

  const TrackAndTrace: React.FC<Props>;

  export default TrackAndTrace;
}