import React from "react";
import { useParams } from "react-router-dom";

function User()
{
    const {userId} = useParams()
    return (
        <>
          <h1 className="text-center py-3 bg-orange-700 text-white">User: {userId}</h1>
        </>
    )
}

export default User