"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

function HomeView(){
    //(session is alias to the data) reading the session of the user from authClient
    const {data: session} = authClient.useSession();

    if(!session){
        return(
            <p>Loading...</p>
        )
    }

    return (
        <div className="flex flex-col p-4 gap-y-4">
           <p>Logged in as {session.user.name}</p>
           <Button onClick={()=> authClient.signOut()}> Sign Out</Button>
        </div>
    )
}

export default HomeView;
