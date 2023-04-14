declare module "@parcellab/js-plugin-utils/v3/vue" {
  import { defineComponent } from "vue";

  export interface PluginOptionsType {
    options?: object;
    disableDefaultStyles?: boolean;
  }

  export default function (props: PluginOptionsType): ReturnType<typeof defineComponent>;
}
