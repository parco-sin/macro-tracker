import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import Dashboard from './pages/Dashboard';
import FoodTracker from './pages/FoodTracker';
import WorkoutTracker from './pages/WorkoutTracker';
import Progress from './pages/Progress';
import Settings from './pages/Settings';
import Navigation from './components/Navigation';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <AppShell
          padding="md"
          navbar={<Navigation />}
          styles={(theme) => ({
            main: {
              backgroundColor: theme.colors.gray[0]
            },
          })}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/food" element={<FoodTracker />} />
            <Route path="/workout" element={<WorkoutTracker />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
