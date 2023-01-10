// get localstorage and provide
import React, { useContext, useState } from "react";

const FavoriteContext = React.createContext();

function FavoriteProvider({ children }) {
  const [launches, setLaunches] = useState(() => new Map());
  const [pads, setPads] = useState(() => new Map());

  function handleAddLaunch(launch) {
    const draft = structuredClone(launches);

    draft.set(launch.flight_number, launch);

    setLaunches(draft);
  }

  function handleAddPad(pad) {
    const draft = structuredClone(pads);

    draft.set(pad.site_id, pad);

    setPads(draft);
  }

  function handleRemoveLaunch(id) {
    const draft = structuredClone(launches);

    draft.delete(id);

    setLaunches(draft);
  }

  function handleRemovePad(id) {
    const draft = structuredClone(pads);

    draft.delete(id);

    setPads(draft);
  }

  const state = {
    launches,
    pads,
  };
  
  const actions = {
    addLaunch: handleAddLaunch,
    addPad: handleAddPad,
    removeLaunch: handleRemoveLaunch,
    removePad: handleRemovePad,
  };

  return (
    <FavoriteContext.Provider value={{ state, actions }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const { state, actions } = useContext(FavoriteContext);

  return [state, actions];
}

export { FavoriteContext as default, FavoriteProvider as Provider };
