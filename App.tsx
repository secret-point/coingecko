import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import RootNavigator from './src/navigation/RootNavigator';
import ErrorBoundary from 'react-native-error-boundary';

const queryClient = new QueryClient({});

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
