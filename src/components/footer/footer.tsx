import {
  aboutContent,
  firstColumnContent,
  resourcesContent
} from '@/components/footer/footerResources.ts';
import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { FaFacebook, FaInstagramSquare, FaPinterest } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Paragraph from '../typography/paragraph.tsx';

export default function Footer(): JSX.Element {
  return (
    <div className='flex min-h-[20svh] flex-col justify-center gap-6 border-t-2 border-solid border-tertiary-color px-36 py-10 leading-7 sm:flex-row'>
      <div>
        <Paragraph className='text-primary-text-color mb-3'>
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
            className='text-primary-text-color leading-7'
          >
            {content.title}
            <br />
          </Link>
        ))}
      </div>

      <div>
        <Paragraph className='text-primary-text-color mb-3'>
          <b>Mengenai AsuhHewan</b>
        </Paragraph>
        {aboutContent.map((content) => (
          <Link
            key={content.link}
            to={content.link}
            className='text-primary-text-color leading-7'
          >
            {content.title}
            <br />
          </Link>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='text-primary-text-color mb-3'>
          <b>Sumber Daya</b>
        </Paragraph>
        {resourcesContent.map((content) => (
          <Link
            key={content.link}
            to={content.link}
            className='text-primary-text-color leading-7'
          >
            {content.title}
            <br />
          </Link>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='text-primary-text-color mb-3'>
          <b>Ikuti Kami</b>
        </Paragraph>
        <IconContext.Provider value={useMemo(() => ({ size: '1.3rem' }), [])}>
          <div className='mt-1 flex flex-row gap-2'>
            <a
              href={'https://www.facebook.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaFacebook className='text-primary-text-color' />
            </a>
            <a
              href={'https://www.instagram.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaInstagramSquare className='text-primary-text-color' />
            </a>
            <a
              href={'https://www.twitter.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaSquareXTwitter className='text-primary-text-color' />
            </a>
            <a
              href={'https://www.pinterest.com'}
              target='_blank'
              rel='noreferrer'
            >
              <FaPinterest className='text-primary-text-color' />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
