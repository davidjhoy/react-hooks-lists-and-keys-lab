import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const aTags = links.map((thing)=>{
    return <a key = {thing} href = {"#"+thing}>{thing}</a>
  })
  return <nav>{aTags}</nav>;
}

export default NavBar;
