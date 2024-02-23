import {
  BanknotesIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CodeBracketIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import { FaRegHandshake } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import { LiaDonateSolid } from 'react-icons/lia';

export const opsiTentangKami = [
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

export const opsiBantuKami = [
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
    href: '/program-fundraising',
    icon: BanknotesIcon
  }
];

export const opsiSumberDaya = [
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

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}
