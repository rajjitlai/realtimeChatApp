import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import loader from "../assets/rj.ico"; // change the loader after the development
import { setAvatarRoute } from "../utils/APIRoutes";

export default function SetAvatar() {
  const api =
    "https://api.multiavatar.com/Starcrasher.png?apikey=YOUR_API_KEYYWE6ILg09AMzCF";
  const naviagate = useNavigate();

  return (
    <>
      <Container></Container>;
      <ToastContainer />
    </>
  );
}

const Container = styled.div``;
