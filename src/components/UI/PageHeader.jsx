import { Link } from 'react-router-dom';
import Button from './Button';

export default function PageHeader({ title, to, linkText }) {
  return (
    <div className='my-5 flex items-center justify-between'>
      <h1 className='text-4xl'>{title}</h1>
      <Link to={to}>
        <Button>Go back</Button>
      </Link>
    </div>
  );
}
