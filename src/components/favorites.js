import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Heading,
} from "@chakra-ui/core";
import React, { useMemo, useRef } from "react";
import { useFavorites } from "../context/favorite";
import { LaunchItem } from "./launches";
import { LaunchPadItem } from "./launch-pads";

export function FavoriteDrawer({ isOpen, onClose }) {
  const btnRef = useRef();
  const [{ launches, pads }] = useFavorites();

  const favoriteLaunches = useMemo(() => Array.from(launches.values()));
  const favoritePads = useMemo(() => Array.from(pads.values()));

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorites</DrawerHeader>

          <DrawerBody>
            {favoriteLaunches.length !== 0 && (
              <>
                <Heading fontSize="lg">Launches</Heading>
                {favoriteLaunches.map((launch) => (
                  <LaunchItem launch={launch} key={launch.flight_number} />
                ))}
              </>
            )}
            {favoritePads.length !== 0 && (
              <>
                <Heading fontSize="lg" mt="8">
                  Launch Pads
                </Heading>

                {favoritePads.map((pad) => (
                  <LaunchPadItem launchPad={pad} key={pad.site_id} />
                ))}
              </>
            )}
            {!favoritePads.length && !favoriteLaunches.length && (
              <Heading fontSize="lg" mt="8">
                No Favorites yet
              </Heading>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
