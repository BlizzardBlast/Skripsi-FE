import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  BanknotesIcon,
  Bars3Icon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CodeBracketIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UsersIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { FaRegHandshake } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import { LiaDonateSolid } from 'react-icons/lia';
import LoadImage from '../loadImage/loadImage.tsx';

const opsiTentangKami = [
  {
    name: 'Mengenai AsuhHewan',
    description: 'Kenal kami lebih dalam',
    href: '/tentang-kami',
    icon: InformationCircleIcon
  },
  {
    name: 'Lowongan Kerja',
    description: 'Telurusi lowongan kerja yang ada di AsuhHewan',
    href: '/lowongan-kerja',
    icon: BriefcaseIcon
  },
  {
    name: 'Staf & Dewan Direksi',
    description: 'Struktur Organisasi dari AsuhHewan',
    href: '/struktur-organisasi',
    icon: BuildingOffice2Icon
  },
  {
    name: 'Berita dan Acara',
    description: 'Cari tahu berita dan acara terbaru dari AsuhHewan',
    href: '/berita-dan-acara',
    icon: NewspaperIcon
  },
  {
    name: 'Kontak',
    description: 'Hubungi Kami',
    href: '/kontak',
    icon: PhoneIcon
  }
];

const opsiBantuKami = [
  {
    name: 'Donasi',
    description: 'Berikan donasi agar kami dapat membantu lebih banyak hewan',
    href: '/donasi',
    icon: LiaDonateSolid
  },
  {
    name: 'Sukarelawan',
    description: 'Ikuti program sukarelawan kami',
    href: '/sukarelawan',
    icon: UserGroupIcon
  },
  {
    name: 'Program Ambassador',
    description: 'Ikuti program Ambassador kami',
    href: '/program-ambassador',
    icon: UsersIcon
  },
  {
    name: 'Makanan dan Persediaan',
    description: 'Berikan sembako kepada hewan yang membutuhkan',
    href: '/sembako',
    icon: IoFastFoodOutline
  },
  {
    name: 'Penggalangan Dana',
    description: 'Ikuti program Fundraising kami',
    href: '/program-Fundraising',
    icon: BanknotesIcon
  }
];

const opsiSumberDaya = [
  {
    name: 'FAQ',
    description: 'Pertanyaan yang sering ditanyakan',
    href: '/faq',
    icon: QuestionMarkCircleIcon
  },
  {
    name: 'Kemitraan',
    description: 'Telurusi siapa saja mitra kami',
    href: '/mitra',
    icon: FaRegHandshake
  },
  {
    name: 'Untuk Pengembang',
    description: 'Telusuri sumber daya untuk pengembang',
    href: '/pengembang',
    icon: CodeBracketIcon
  }
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-[#FFFBE9]'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Asuh Hewan</span>
            <LoadImage
              source='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alternative='tailwind-logo'
              classes='h-8 w-8'
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#AD8B73]'
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center bg-transparent gap-x-1 px-2 rounded text-sm font-semibold leading-6 border-0 hover:text-[#CEAB93] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AD8B73] text-[#AD8B73]'>
              Bantu Kami
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#FFFBE9] shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {opsiBantuKami.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#E3CAA5]'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#E3CAA5] group-hover:bg-[#FFFBE9]'>
                        <item.icon
                          className='h-6 w-6 text-[#AD8B73] group-hover:text-[#CEAB93]'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-[#AD8B73]'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-[#CEAB93] group-hover:text-[#FFFBE9]'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <Popover.Button className='flex items-center bg-transparent gap-x-1 px-2 rounded text-sm font-semibold leading-6 border-0 hover:text-[#CEAB93] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AD8B73] text-[#AD8B73]'>
              Tentang Kami
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#FFFBE9] shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {opsiTentangKami.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#E3CAA5]'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#E3CAA5] group-hover:bg-[#FFFBE9]'>
                        <item.icon
                          className='h-6 w-6 text-[#AD8B73] group-hover:text-[#CEAB93]'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-[#AD8B73]'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-[#CEAB93] group-hover:text-[#FFFBE9]'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <Popover.Button className='flex items-center bg-transparent gap-x-1 px-2 rounded text-sm font-semibold leading-6 border-0 hover:text-[#CEAB93] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AD8B73] text-[#AD8B73]'>
              Sumber Daya
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-[#FFFBE9] shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {opsiSumberDaya.map((item) => (
                    <div
                      key={item.name}
                      className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#E3CAA5]'
                    >
                      <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#E3CAA5] group-hover:bg-[#FFFBE9]'>
                        <item.icon
                          className='h-6 w-6 text-[#AD8B73] group-hover:text-[#CEAB93]'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-auto'>
                        <a
                          href={item.href}
                          className='block font-semibold text-[#AD8B73]'
                        >
                          {item.name}
                          <span className='absolute inset-0' />
                        </a>
                        <p className='mt-1 text-[#CEAB93] group-hover:text-[#FFFBE9]'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href='/adopsi'
            className='text-sm font-semibold leading-6 text-[#AD8B73] hover:text-[#CEAB93] px-2'
          >
            Adopsi
          </a>
        </Popover.Group>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-10'>
          <a
            href='/masuk'
            className='text-sm font-semibold leading-6 text-[#AD8B73] hover:text-[#CEAB93] px-2'
          >
            Masuk
          </a>
          <a
            href='/daftar'
            className='text-sm font-semibold leading-6 text-[#AD8B73] hover:text-[#CEAB93] px-2'
          >
            Daftar
          </a>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden bg-[#FFFBE9]'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#FFFBE9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#AD8B73]'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Asuh Hewan</span>
              <LoadImage
                source='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alternative='tailwind-logo'
                classes='h-8 w-8'
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-[#AD8B73]'
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-[#AD8B73]'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'>
                        Bantu Kami
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...opsiBantuKami].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'>
                        Tentang Kami
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...opsiTentangKami].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'>
                        Sumber Daya
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...opsiSumberDaya].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href='/adopsi'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'
                >
                  Adopsi
                </a>
                <a
                  href='/kontak'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'
                >
                  Hubungi Kami
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='/masuk'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'
                >
                  Masuk
                </a>
                <a
                  href='/daftar'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#AD8B73] hover:bg-[#E3CAA5]'
                >
                  Daftar
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
