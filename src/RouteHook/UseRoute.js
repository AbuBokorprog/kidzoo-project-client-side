import { useEffect } from "react";

const useRoute = (route) => {
  useEffect(() => {
    document.title = `KidZoo || ${route}`;
  }, [route]);
};

export default useRoute;
