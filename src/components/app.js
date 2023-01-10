import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/core";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import { useFavorites } from "../context/favorite";
import { FavoriteDrawer } from "./favorites";
import { Star } from "react-feather";

export default function App() {
  const [{ launches, pads }] = useFavorites();

  console.log("launches", launches);
  console.log("pads", pads);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
    </div>
  );
}

function NavBar() {
  const [showFavorites, toggleFavorites] = useState(false);


  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="6"
        bg="gray.800"
        color="white"
      >
        <Text
          fontFamily="mono"
          letterSpacing="2px"
          fontWeight="bold"
          fontSize="lg"
        >
          ¡SPACE·R0CKETS!
        </Text>
        <Star fill="gold" stroke="gold" onClick={()=> toggleFavorites(true)} />
      </Flex>
      <FavoriteDrawer onClose={() => toggleFavorites(false)} isOpen={showFavorites} />
    </>
  );
}
