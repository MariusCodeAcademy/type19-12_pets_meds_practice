export default function Button({ children, outline }) {
  return (
    <button
      className={`${
        outline ? 'bg-white text-main' : 'bg-main text-white'
      }  px-6 py-2 text-sm uppercase border font-semibold border-main rounded-md`}>
      {children}
    </button>
  );
}
