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
        <Paragraph className='mb-3 text-primary-text-color'>
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
            className='leading-7 text-primary-text-color'
            aria-label={content.title}
          >
            {content.title}
            <br />
          </Link>
        ))}
      </div>

      <div>
        <Paragraph className='mb-3 text-primary-text-color'>
          <b>Mengenai Kofebin</b>
        </Paragraph>
        {aboutContent.map((content) => (
          <Link
            key={content.link}
            to={content.link}
            className='leading-7 text-primary-text-color'
            aria-label={content.title}
          >
            {content.title}
            <br />
          </Link>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='mb-3 text-primary-text-color'>
          <b>Sumber Daya</b>
        </Paragraph>
        {resourcesContent.map((content) => (
          <Link
            key={content.link}
            to={content.link}
            className='leading-7 text-primary-text-color'
            aria-label={content.title}
          >
            {content.title}
            <br />
          </Link>
        ))}
        <br />
      </div>

      <div>
        <Paragraph className='mb-3 text-primary-text-color'>
          <b>Ikuti Kami</b>
        </Paragraph>
        <IconContext.Provider value={useMemo(() => ({ size: '1.3rem' }), [])}>
          <div className='mt-1 flex flex-row gap-2'>
            <a
              href={'https://www.facebook.com'}
              target='_blank'
              rel='noreferrer'
              aria-label='Facebook'
            >
              <FaFacebook className='text-primary-text-color' />
            </a>
            <a
              href={'https://www.instagram.com'}
              target='_blank'
              rel='noreferrer'
              aria-label='Instagram'
            >
              <FaInstagramSquare className='text-primary-text-color' />
            </a>
            <a
              href={'https://www.twitter.com'}
              target='_blank'
              rel='noreferrer'
              aria-label='X'
            >
              <FaSquareXTwitter className='text-primary-text-color' />
            </a>
            <a
              href={'https://www.pinterest.com'}
              target='_blank'
              rel='noreferrer'
              aria-label='Pinterest'
            >
              <FaPinterest className='text-primary-text-color' />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
