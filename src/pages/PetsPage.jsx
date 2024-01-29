import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

export default function PetsPage() {
  return (
    <div className='container'>
      <div className='mt-5 flex items-center justify-between'>
        <h1 className='text-4xl'>Pets List</h1>
        <Link to='/add-pet'>
          <Button>Add pet</Button>
        </Link>
      </div>
    </div>
  );
}
