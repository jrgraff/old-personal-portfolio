import tw from 'twin.macro';

import { TopSection } from './containers/TopSection';

import './App.css';

const AppContainer = tw.div`
  flex
  w-full
  h-full
`

function App() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  );
}

export default App;
