import { Animated, Basic, bounce, Combined } from '../styles'

const Home = () => (
  <div>
    <Basic>Cool Styles</Basic>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let&apos;s bounce.</Animated>
  </div>
)

export default Home
