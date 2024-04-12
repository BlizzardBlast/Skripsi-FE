export default function ConvertToRupiah(amount: number): string {
  let rupiah = '';
  const amountRev = amount.toString().split('').reverse().join('');
  for (let i = 0; i < amountRev.length; i++) {
    if (i % 3 === 0) rupiah += amountRev.substr(i, 3) + '.';
  }
  return (
    'Rp' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
}
