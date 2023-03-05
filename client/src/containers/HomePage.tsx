import { Button, ButtonIcon } from 'components/atoms';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
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
