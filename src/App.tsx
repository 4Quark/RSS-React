import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Layout from './components/layout';
import SearchPage from './pages/searchPage';
import PersonPage from './pages/person';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/search/:page" element={<SearchPage />}>
            <Route path=":id" element={<PersonPage />}></Route>
          </Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
