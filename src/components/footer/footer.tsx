import { FaFacebook, FaInstagramSquare, FaPinterest } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import Paragraph from '../typography/paragraph';

export default function Footer(): JSX.Element {
  const firstColumnContent = [
    'Adopsi',
    'Donasi',
    'Sukarelawan',
    'Program Ambassador',
    'Makanan dan Persediaan',
    'Penggalangan dana'
  ];

  const aboutContent = [
    'Lowongan Kerja',
    'Staf & Dewan Direksi',
    'Berita dan Acara',
    'Kontak'
  ];

  const resourcesContent = ['FAQ', 'Kemitraan', 'Untuk Pengembang'];

  return (
    <div className='min-h-[20svh] border-t-2 border-solid border-gray-300 px-36 py-10 flex flex-col sm:flex-row justify-center gap-6 leading-7'>
      <div>
        <Paragraph className='mb-3'>
          <b>
            Bagaimana Anda
            <br />
            dapat membantu?
          </b>
        </Paragraph>
        {firstColumnContent.map((content, index) => (
          <Paragraph key={`content${index}`}>{content}</Paragraph>
        ))}
      </div>

      <div>
        <Paragraph className='mb-3'>
          <b>Mengenai AsuhHewan</b>
        </Paragraph>
        {aboutContent.map((content, index) => (
          <Paragraph key={`aboutContent${index}`}>{content}</Paragraph>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='mb-3'>
          <b>Sumber Daya</b>
        </Paragraph>
        {resourcesContent.map((content, index) => (
          <Paragraph key={`resourcesContent${index}`}>{content}</Paragraph>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='mb-3'>
          <b>Ikuti Kami</b>
        </Paragraph>
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
