import React from "react";
import { useParams } from "react-router-dom";
import { useUsersQuery } from "../redux/api/userApi";

const User = () => {
  const { id } = useParams();
  const url = `/users/${id}`;
  const { data, isLoading } = useUsersQuery(url);
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#111617]">
      <div className="w-2/4 flex bg-[#101d20]  rounded-xl p-5">
       <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png" alt="" />
       <div className="w-4/5">
        
       </div>
      </div>
    </div>
  );
};

export default User;
