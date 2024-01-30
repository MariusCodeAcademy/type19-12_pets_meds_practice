import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';

import './styles/App.css';
import PetsPage from './pages/PetsPage';
import MedicationsPage from './pages/MedicationsPage';
import AddPet from './pages/AddPet';
import SinglePetPage from './pages/SinglePetPage';
import AddLogPage from './pages/AddLogPage';
import PresriptionPage from './pages/PresriptionPage';

export default function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<PetsPage />} />
        <Route path='/pets/add' element={<AddPet />} />
        <Route path='/pets/:petId' element={<SinglePetPage />} />
        <Route path='/logs/add/:petId' element={<AddLogPage />} />
        <Route path='/medications' element={<MedicationsPage />} />
        <Route path='/presc/add/:petId' element={<PresriptionPage />} />
      </Routes>
    </div>
  );
}
