import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Shubham.</div>
      <div>
        <Link to={"https://www.facebook.com/shubham.aarya.351/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@ShubhamPoddar-q2c"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/shubham-kumar-poddar-a936ba23b/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/shubham84093/?next=%2F&hl=en"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;