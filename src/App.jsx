import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import './styles/App.css';
import PetsPage from './pages/PetsPage';
import MedicationsPage from './pages/MedicationsPage';

export default function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<PetsPage />} />
        <Route path='/medications' element={<MedicationsPage />} />
      </Routes>
    </div>
  );
}
