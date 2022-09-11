import Link from 'next/link';
import { Animated, Basic, bounce, Combined } from '../styles';

function Home() {
  return (
    <div>
      <Basic>Cool Styles</Basic>
      <Combined>
        With <code>:hover</code>.
      </Combined>
      <Animated animation={bounce}>Let&apos;s bounce.</Animated>
      <h1>H1 Tag</h1>
      <h2>H2 Tag</h2>
      <h3>H3 Tag</h3>
      <h4>H4 Tag</h4>
      <h5>H5 Tag</h5>
      <h6>H6 Tag</h6>
      <p>
        Example paragraph. With some <i>Italic text</i> and some <b>bold text</b>.
      </p>
      <Link href="/">Example Link</Link>
    </div>
  );
}

export default Home;
