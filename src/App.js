import React, {Suspense, lazy} from 'react';
import { useAuth } from '@utils/AuthContext';
import { Loader } from '@components';

export const App = () => {

    const [{user}] = useAuth();
    const AuthApp = lazy(() =>  import('./AuthApp'));
    const UnauthApp = lazy(() => import('./UnauthApp/Routes'));

    return user ? (
        <Suspense fallback={<Loader/>}>
          <AuthApp/>
        </Suspense>
    ) : (
        <Suspense fallback={<Loader/>}>
            <UnauthApp/>
        </Suspense>
    )
};