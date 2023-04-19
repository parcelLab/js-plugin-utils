declare module "@parcellab/js-plugin-utils/v3/vue" {
  import { defineComponent } from "vue";

  interface PropsType {
    options?: object;
    disableDefaultStyles?: boolean;
  }

  export default function (props: PropsType): ReturnType<typeof defineComponent>;
}
