import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

import useCurrentUser from '@/hooks/useCurrentUser';

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
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix Clone</h1>
      <p className="text-white">Logged in as: {user?.name}</p>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">
        Logout!
      </button>
    </>
  )
}
