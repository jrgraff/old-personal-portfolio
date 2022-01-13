import tw from 'twin.macro';

import { TopSection } from './containers/TopSection';
import { AboutSection } from './containers/AboutSection';

import './App.css';

const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`

function App() {
  return (
    <AppContainer>
      <TopSection />
      <AboutSection />
    </AppContainer>
  );
}

export default App;
