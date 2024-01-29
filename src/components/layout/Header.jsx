import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='container flex items-center justify-between'>
        <Link to='/' className='text-2xl font-bold text-main'>
          Logo
        </Link>
        <nav className='flex'>
          <NavLink className={'px-3 py-2 text-main hover:bg-slate-300'} to='/'>
            Pets
          </NavLink>
          <NavLink className={'px-3 py-2 text-main hover:bg-slate-300'} to='/medications'>
            Medications
          </NavLink>
        </nav>
      </div>
      <hr className='border-main/30' />
    </header>
  );
}
