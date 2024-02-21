import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagramSquare, FaPinterest } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Paragraph from '../typography/paragraph.tsx';
import { useMemo } from 'react';

export default function Footer(): JSX.Element {
  const firstColumnContent = [
    { title: 'Adopsi', link: '/adopsi' },
    { title: 'Donasi', link: '/donasi' },
    { title: 'Sukarelawan', link: '/sukarelawan' },
    { title: 'Program Ambassador', link: '/program-ambassador' },
    { title: 'Makanan dan Persediaan', link: '/sembako' },
    { title: 'Penggalangan dana', link: '/program-fundraising' }
  ];

  const aboutContent = [
    { title: 'Lowongan Kerja', link: '/lowongan-kerja' },
    { title: 'Staf & Dewan Direksi', link: '/struktur-organisasi' },
    { title: 'Berita dan Acara', link: '/berita-dan-acara' },
    { title: 'Kontak', link: '/kontak' }
  ];

  const resourcesContent = [
    { title: 'FAQ', link: '/faq' },
    { title: 'Kemitraan', link: '/mitra' },
    { title: 'Untuk Pengembang', link: '/pengembang' }
  ];

  return (
    <div className='flex min-h-[20svh] flex-col justify-center gap-6 border-t-2 border-solid border-tertiary-color px-36 py-10 leading-7 sm:flex-row'>
      <div>
        <Paragraph className='mb-3 text-primary-color'>
          <b>
            Bagaimana Anda
            <br />
            dapat membantu?
          </b>
        </Paragraph>
        {firstColumnContent.map((content) => (
          <Link
            key={content.link}
            to={content.link}
            className='leading-7 text-primary-color'
          >
            {content.title}
            <br />
          </Link>
        ))}
      </div>

      <div>
        <Paragraph className='mb-3 text-primary-color'>
          <b>Mengenai AsuhHewan</b>
        </Paragraph>
        {aboutContent.map((content) => (
          <Link
            key={content.link}
            to={content.link}
            className='leading-7 text-primary-color'
          >
            {content.title}
            <br />
          </Link>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='mb-3 text-primary-color'>
          <b>Sumber Daya</b>
        </Paragraph>
        {resourcesContent.map((content) => (
          <Link
            key={content.link}
            to={content.link}
            className='leading-7 text-primary-color'
          >
            {content.title}
            <br />
          </Link>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='mb-3 text-primary-color'>
          <b>Ikuti Kami</b>
        </Paragraph>
        <IconContext.Provider value={useMemo(() => ({ size: '1.3rem' }), [])}>
          <div className='mt-1 flex flex-row gap-2'>
            <a
              href={'https://www.facebook.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook className='text-primary-color' />
            </a>
            <a
              href={'https://www.instagram.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagramSquare className='text-primary-color' />
            </a>
            <a
              href={'https://www.twitter.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaSquareXTwitter className='text-primary-color' />
            </a>
            <a
              href={'https://www.pinterest.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaPinterest className='text-primary-color' />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
