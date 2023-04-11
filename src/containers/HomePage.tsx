import { Button, ButtonIcon } from 'components/atoms';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const HomePage: NextPage = () => {
  return (
    <div>
      HomePage
      <Button />
      <ButtonIcon />
      <Link href="/sample-page">to sample page</Link>
    </div>
  );
};

export default HomePage;
