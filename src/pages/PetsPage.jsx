import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import useApiData from './../hooks/useApiData';
import Card from '../components/UI/Card';
import SinglePetCard from '../components/pets/SinglePetCard';
import PageHeader from '../components/UI/PageHeader';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

export default function PetsPage() {
  const [petsArr, setPetsArr, isLoading] = useApiData(url);

  console.log('petsArr ===', petsArr);

  return (
    <div className='container'>
      <PageHeader title='Pets List' to='/pets/add' linkText='Add pet' />

      {isLoading && <p className='text-4xl px-4 py-3 border rounded-md text-center'>Loading... </p>}
      <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {petsArr.map((pObj) => (
          <SinglePetCard key={pObj.id} item={pObj} />
        ))}
      </ul>
    </div>
  );
}
