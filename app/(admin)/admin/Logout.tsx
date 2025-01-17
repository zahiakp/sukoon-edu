
"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { showMessage } from "@/components/common/CusToast";
import StyledButton from "@/components/common/StyledButton";

function Logout() {
  
  
  const [isOpen,setIsOpen] = useState(false)
 const handleLogout = async () => {
  const confirm = window.confirm('are ready to logout ?')
   if(confirm){
      Cookies.remove("token");
      window.location.replace("/login");
    }
  };
  
  return (<>
    <button onClick={() => handleLogout()} className="group absolute bottom-0 w-full button p-5  bg-zinc-200 hover:bg-lime-600 hover:text-white duration-200" aria-label="Logout">
      <StyledButton text={"Log Out"}/>
      <div className="arrow-wrapper">
        <div className="arrow bg-secondary/55"></div>
      </div>
    </button>
     </>
  );
}

export default Logout;
