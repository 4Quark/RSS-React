import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Layout from './components/layout';
import Home from './pages/Home';
import UncontrolledForm from './pages/Uncontrolled';
import ReactHookForm from './pages/HookForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/uncontrolled_form" element={<UncontrolledForm />}></Route>
        <Route path="/hook_form" element={<ReactHookForm />}></Route>
      </Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
