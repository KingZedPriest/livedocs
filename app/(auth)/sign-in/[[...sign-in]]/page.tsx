//Import Needed Clerk.js Sign-in Component
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return ( 
        <main className="auth-page">
            <SignIn />
        </main>
     );
}
 
export default SignInPage;