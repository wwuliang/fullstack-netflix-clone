import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  // Check if the session does not exists
  if (!session) {
    return {
      redirect: {
        destination: '/auth', // Redirect to the auth page
        permanent: false,
      }
    }
  }

  return {
   props: {}
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  )
}
