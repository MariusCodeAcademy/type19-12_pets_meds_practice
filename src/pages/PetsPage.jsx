import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import useApiData from './../hooks/useApiData';
import Card from '../components/UI/Card';
import SinglePetCard from '../components/pets/SinglePetCard';
import PageHeader from '../components/UI/PageHeader';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

export default function PetsPage() {
  const [petsArr, setPetsArr] = useApiData(url);

  console.log('petsArr ===', petsArr);

  return (
    <div className='container'>
      <PageHeader title='Pets List' to='/pets/add' linkText='Add pet' />

      {/* <div className='my-5 flex items-center justify-between'>
        <h1 className='text-4xl'>Pets List</h1>
        <Link to='/pets/add'>
          <Button>Add pet</Button>
        </Link>
      </div> */}
      <ul className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {petsArr.map((pObj) => (
          <SinglePetCard key={pObj.id} item={pObj} />
        ))}
      </ul>
    </div>
  );
}
