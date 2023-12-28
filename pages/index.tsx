import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';

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
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar/>
      <Billboard/>
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies}/>
      </div>
    </>
  )
}
