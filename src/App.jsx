import { Suspense } from 'react';
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return(
  <>
  <Header/>
  <Suspense fallback={<h2>Loading.....</h2>}>
    <Outlet/>

  </Suspense>
 
  </>
  );
}

export default App
