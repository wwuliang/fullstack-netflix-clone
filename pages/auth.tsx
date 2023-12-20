import Input from "@/components/input"

const Auth = () => {
    return (
        /* Background Image */
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {/* Overlay Background with 50% Opacitiy */}
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                {/* Small Netflix Logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12"/>
                </nav>
                {/* Sign-In Header */}
                <div className="flex justify-center">
                    <div className="bg-black bg-opacitiy-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        {/* Sign-In Input Section */}
                        <div className="flex flex-col gap-4">
                            <Input />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;