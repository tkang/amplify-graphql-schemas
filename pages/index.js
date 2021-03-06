import Head from "next/head";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import { Auth } from "aws-amplify";

function Home() {
  useEffect(() => {
    checkUser(); // new function call
  });

  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
    console.log("user attributes: ", user.attributes);
  }

  return (
    <div>
      <Head>
        <title>Amplify GraphQL Schemas</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔍🏢🏬🔍</text></svg>"
        />
      </Head>

      <div className="container mx-auto">
        <main className="flex-col items-center justify-center flex-1">
          <h1 className="text-6xl">Amplify GraphQL Schemas</h1>

          <p className="text-2xl">Common GraphQL Schemas in Amplify</p>
        </main>
        <AmplifySignOut />
      </div>

      <footer className="flex items-center justify-center h-8 border-t-1">
        Maintained by ...
      </footer>
    </div>
  );
}

export default withAuthenticator(Home);
