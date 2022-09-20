/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@public/img/logo.svg';

export function Logo() {
  return (
    <Link href="/">
      <a>
        <Image alt="Georgia Tech Alumni Association of Los Angeles" src={logoImg} />
      </a>
    </Link>
  );
}

export default Logo;
