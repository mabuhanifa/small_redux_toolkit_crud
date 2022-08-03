import React from "react";
import { useParams } from "react-router-dom";
import { useUsersQuery } from "../redux/api/userApi";
import Spinner from "./spinner/Spinner";

const User = () => {
  const { id } = useParams();
  const url = `/users/${id}`;
  const { data, isLoading } = useUsersQuery(url);
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-[#111617]">
      {isLoading && <Spinner />}
      <div className="w-2/4 flex justify-center items-center bg-[#101d20]  rounded-xl p-5">
        <img
          className="w-20 h-20 my-auto object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
          alt=""
        />
        <div className="w-4/5 text-gray-300 m-5 p-5 leading-10">
          <h2>
            Name : <b>{data?.name}</b>
          </h2>
          <h2>
            User Name : <b>{data?.username}</b>
          </h2>
          <h2>
            Email : <b>{data?.email}</b>
          </h2>
          <h2>
            ID : <b>{data?.id}</b>
          </h2>
        </div>
        <div className="w-4/5 text-gray-300 m-5 p-5 leading-10 flex">
         <div>
         <h2>
            Name : <b>{data?.name}</b>
          </h2>
          <h2>
            User Name : <b>{data?.username}</b>
          </h2>
          <h2>
            Email : <b>{data?.email}</b>
          </h2>
          <h2>
            ID : <b>{data?.id}</b>
          </h2>
         </div>
         <div>
         <h2>
            Name : <b>{data?.name}</b>
          </h2>
          <h2>
            User Name : <b>{data?.username}</b>
          </h2>
          <h2>
            Email : <b>{data?.email}</b>
          </h2>
          <h2>
            ID : <b>{data?.id}</b>
          </h2>
         </div>
        </div>
      </div>
    </div>
  );
};

export default User;
