declare module "@parcellab/js-plugin-utils/v5/vue" {
  import { defineComponent } from "vue";

  interface Props {
    options?: object;
    disableDefaultStyles?: boolean;
  }

  export default function (props: Props): ReturnType<typeof defineComponent>;
}
