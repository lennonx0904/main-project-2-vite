import Button from 'share-components-vite/src/components/Button';
import NavBar from '@/components/NavBar';
import { Badge } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.scss';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <NavBar />
        <h1>Main Project 2 Vite</h1>
        <Button />
        <Badge color="green">Complete</Badge>
      </div>
    </QueryClientProvider>
  );
}

export default App;
