import tw from 'twin.macro';

import { TopSection } from './containers/TopSection';
import { AboutSection } from './containers/AboutSection';
import { ProjectsSection } from './containers/ProjectsSection';

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
      <ProjectsSection />
    </AppContainer>
  );
}

export default App;
