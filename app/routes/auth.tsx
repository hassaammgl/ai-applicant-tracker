import { usePuterStore } from "~/lib/puter"

export const meta = () => ([
    { title: "Resumind | Auth" },
    { name: "description", content: "Log into your account" }
])


const Auth = () => {
    const { isLoading, auth } = usePuterStore();

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex justify-center items-center">
            <div className="gradient-border shadow-lg" >
                <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1>Welcome</h1>
                        <h2>Log In to Continue Your Job Journey</h2>
                    </div>
                    <div>
                        {isLoading ? (
                            <button className="auth-button animate-pulse">Signing you in ...</button>
                        ) : (<>
                            {auth.isAuthenticated ? (
                                <button></button>
                            ) : (
                                <button></button>
                            )}</>)}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Auth