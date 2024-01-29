export default function Button({ children }) {
  return (
    <button className='bg-main px-6 py-2 text-white uppercase font-semibold rounded-md'>
      {children}
    </button>
  );
}
