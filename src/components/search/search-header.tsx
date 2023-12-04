import { Input } from '../ui/input';
import './search-header.css';

export default function SearchHeader(): JSX.Element {
  return (
    <Input
      type='search'
      id='search-header'
      name='search'
      placeholder='Cari...'
      spellCheck={false}
      role='search'
      aria-label='Cari barang'
      className='focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-slate-800'
    />
  );
}
