//Import Needed Clerk.js Sign-up Component
import { SignUp } from "@clerk/nextjs";

const SignInPage = () => {
    return ( 
        <main className="auth-page">
            <SignUp />
        </main>
     );
}
 
export default SignInPage;