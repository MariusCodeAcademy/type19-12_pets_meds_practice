import { Link } from 'react-router-dom';

export default function MedicationsPage() {
  return (
    <div className='container'>
      <h1>MedicationsPage</h1>
      <Link to='/add-pet'>Add pet</Link>
    </div>
  );
}
