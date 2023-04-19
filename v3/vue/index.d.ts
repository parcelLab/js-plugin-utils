declare module "@parcellab/js-plugin-utils/v3/vue" {
  import { defineComponent } from "vue";

  interface PropsType {
    options?: Record<string, unknown | never>;
    disableDefaultStyles?: boolean;
  }

  export default function (props: PropsType): ReturnType<typeof defineComponent>;
}
