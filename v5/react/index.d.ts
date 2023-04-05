declare module "@parcellab/js-plugin-utils/v5/react" {
  import type React from "react";

  interface Props {
    options?: Partial<{
      banner_image: string;
      banner_link: string;
      use_campaign_banners: boolean;
      borderColor: string;
      borderRadius: string;
      buttonBackground: string;
      buttonColor: string;
      comingFromSearch: boolean;
      disableVoting: boolean;
      forceZip: boolean;
      hide_cancelled: boolean;
      icon_theme: "xmas" | "easter" | "";
      iconColor: string;
      iconSize: string;
      liveMapBackground: string;
      liveMapColor: string;
      openinghrs_warn: string;
      pwrdBy_parcelLab: boolean;
      rerouteButton: string;
      selectedTrackingNo: string;
      show_articleList: boolean;
      show_note: string;
      show_searchForm: boolean;
      show_zipCodeInput: boolean;
      use_origin_courier: boolean;
      splitOrderWarning: string;
      tabIconColor: string;
      activeTabIconColor: string;
      disableStyleEditor: boolean;
      courier: string;
      id: string;
      lang: string;
      orderNo: string;
      s: string;
      trackingNo: string;
      userId: string;
      xid: string;
      zip: string;
      locale: string;
      onRendered: (props: object) => void;
      containerId: string;
      customTranslations: {
        [language: string]: { [key: string]: unknown };
      };
    }>;
    disableDefaultStyles?: boolean;
  }

  const TrackAndTrace: React.FC<Props>;

  export default TrackAndTrace;
}
