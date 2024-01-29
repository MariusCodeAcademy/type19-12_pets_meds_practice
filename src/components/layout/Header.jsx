import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='container flex items-center justify-between'>
        <Link to='/' className='text-2xl font-bold'>
          Logo
        </Link>
        <nav className='flex gap-2'>
          <NavLink to='/'>Pets</NavLink>
          <NavLink to='/medications'>Medications</NavLink>
        </nav>
      </div>
      <hr />
    </header>
  );
}
