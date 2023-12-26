import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/lib/prismadb';

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });

    // Checks if session, user, or email doesn't exist
    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }

    // Otherwise, fetch the current user
    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });

    // Check if we don't have the current user
    if (!currentUser) {
        throw new Error('Not signed in');
    }

    return { currentUser };
};

export default serverAuth;