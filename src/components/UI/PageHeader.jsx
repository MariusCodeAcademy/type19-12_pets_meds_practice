import Button from './Button';

export default function PageHeader({ title, children }) {
  return (
    <div className='my-5 flex items-center justify-between'>
      <h1 className='text-4xl'>{title}</h1>
      <div className='flex gap-2'>{children}</div>
    </div>
  );
}
