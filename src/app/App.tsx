import { WrapperComposer } from '@/shared/lib/ProviderList'

import {
  AppRouter,
  ErrorBoundary,
  QueryParamsProvider,
  RouterWrapper,
} from './providers'

export const App = () => {
  return (
    <WrapperComposer
      wrappers={[RouterWrapper, ErrorBoundary, QueryParamsProvider]}
      render={() => <AppRouter />}
    />
  )
}
