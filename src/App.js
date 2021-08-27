import React, {Suspense, lazy} from 'react';
import { Loader } from './components/Loader';
import { useAuth } from './AuthContext';


export const App = () => {

    const [{user}] = useAuth();
    // const AuthApp = lazy(() => import('./AuthApp'));
    const UnauthApp = lazy(() => import('./UnauthApp'));

    return user ? (
        <Suspense fallback={<Loader/>}>
          {/* <AuthApp/> */}
        </Suspense>
    ) : (
        <Suspense fallback={<Loader/>}>
            <UnauthApp/>
        </Suspense>
    )
};