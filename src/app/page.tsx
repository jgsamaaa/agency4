import { waveyuMarkup } from "./waveyu-markup";
import WaveyuScripts from "./WaveyuScripts";

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: waveyuMarkup }} />
      <WaveyuScripts />
    </>
  );
}
