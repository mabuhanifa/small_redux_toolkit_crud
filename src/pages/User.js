import React from "react";
import { useParams } from "react-router-dom";
import { useUsersQuery } from "../redux/api/userApi";

const User = () => {
  const { id } = useParams();
  const url = `/users/${id}`;
  const { data, isLoading } = useUsersQuery(url);
  return (
    <div className="flex justify-center items-center w-full h-full mt-10 rounded-2xl">
      <div className="w-3/4 flex justify-center items-center gap-5">
        <div className="w-2/5 h-[500px] leading-10 border  border-gray-300 p-5 rounded shadow-xl flex flex-col justify-center items-center">
          <img
            className="w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            alt=""
          />
          <p>Name : {data?.name}</p>
          <p>User Name : {data?.username} </p>
          <p>Email : {data?.email} </p>
        </div>
        <div className="w-4/5 h-[500px] leading-10 border  border-gray-300 p-5 rounded shadow-xl flex">
          <div className="w-full flex flex-col p-5 border-r-2 ">
            
            <p>Name : {data?.name}</p>
            <p>User Name : {data?.username} </p>
            <p>Email : {data?.email} </p>
          </div>
          <div className="w-full flex flex-col p-5 ">
            <p>Name : {data?.name}</p>
            <p>User Name : {data?.username} </p>
            <p>Email : {data?.email} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
