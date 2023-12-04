import { FaFacebook, FaInstagramSquare, FaPinterest } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

export default function Footer(): JSX.Element {
  const firstColumnContent = [
    'Tentang Tokopedia',
    'Hak Kekayaan Intelektual',
    'Karir',
    'Blog',
    'Bridestory',
    'Tokopedia Parents',
    'Mitra Blog',
    'Tokopedia Affiliate Program',
    'Tokopedia B2B Digital',
    'Tokopedia Marketing Solutions'
  ];
  const beliContent = [
    'Tagihan & Top Up',
    'Tukar Tambah Handphone',
    'Tokopedia COD'
  ];
  const jualContent = [
    'Pusat Edukasi Seller',
    'Mitra Toppers',
    'Daftar Official Store'
  ];
  const bantuanDanPanduanContent = [
    'Tokopedia Care',
    'Syarat dan Ketentuan',
    'Kebijakan Privasi',
    'Mitra'
  ];
  return (
    <div className='min-h-[20svh] border-t-2 border-solid border-gray-300 px-36 py-10 flex flex-col sm:flex-row justify-center gap-6 leading-7'>
      <div>
        <b>Tokopedia</b>
        <br />
        {firstColumnContent.map((content, index) => (
          <p key={`content${index}`}>{content}</p>
        ))}
      </div>

      <div>
        <b>Beli</b>
        <br />
        {beliContent.map((content, index) => (
          <p key={`beliContent${index}`}>{content}</p>
        ))}
        <br />

        <b>Jual</b>
        <br />
        {jualContent.map((content, index) => (
          <p key={`jualContent${index}`}>{content}</p>
        ))}
        <br />

        <b>Bantuan dan Panduan</b>
        <br />
        {bantuanDanPanduanContent.map((content, index) => (
          <p key={`bantuanDanPanduanContent${index}`}>{content}</p>
        ))}
      </div>
      <div>
        <b>Ikuti Kami</b>
        <IconContext.Provider value={{ size: '1.3rem' }}>
          <div className='flex flex-row gap-2 mt-1'>
            <FaFacebook />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaPinterest />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
