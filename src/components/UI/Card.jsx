export default function Card({ children, li = '', className = '' }) {
  const Element = li ? 'li' : 'div';
  return (
    <Element className={'border inline-block text-center rounded-md px-4 py-3 ' + className}>
      {children}
    </Element>
  );
}
