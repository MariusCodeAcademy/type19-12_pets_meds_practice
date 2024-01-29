import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';

export default function SinglePetCard({ item }) {
  return (
    <Card li>
      <h3 className='text-xl mb-4'>{item.name}</h3>
      <p>{new Date(item.dob).toLocaleDateString('lt-LT')}</p>
      <p>{item.client_email}</p>
      <div className='flex gap-2 mt-3 '>
        <Link to={'/pets/1'}>
          <Button>View Logs</Button>
        </Link>
        <Button outline>Delete</Button>
      </div>
    </Card>
  );
}
