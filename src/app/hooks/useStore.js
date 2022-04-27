import { AppContext } from "app/store";
import { useContext } from "react";

const useStore = () => {
  const { state, updateState } = useContext(AppContext);

  return [state, updateState];

};

export default useStore;