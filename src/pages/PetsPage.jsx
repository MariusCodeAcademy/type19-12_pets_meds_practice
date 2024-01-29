import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import useApiData from './../hooks/useApiData';
import Card from '../components/UI/Card';

const url = 'https://glittery-dull-snickerdoodle.glitch.me/v1/pets';

export default function PetsPage() {
  const [petsArr, setPetsArr] = useApiData(url);

  console.log('petsArr ===', petsArr);

  return (
    <div className='container'>
      <div className='my-5 flex items-center justify-between'>
        <h1 className='text-4xl'>Pets List</h1>
        <Link to='/add-pet'>
          <Button>Add pet</Button>
        </Link>
      </div>
      <ul>
        {petsArr.map((pObj) => (
          <li key={pObj.id}>
            <Card>
              <h3 className='text-xl mb-4'>{pObj.name}</h3>
              <p>{new Date(pObj.dob).toLocaleDateString('lt-LT')}</p>
              <p>{pObj.client_email}</p>
              <div className='flex gap-2 mt-3 '>
                <Link to={'/pets/1'}>
                  <Button>View Logs</Button>
                </Link>
                <Button outline>Delete</Button>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
