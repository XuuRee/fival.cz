export const gameAvailable = (): boolean => {
    const query = window.location.pathname;
    return query === "/game" ? true : false;
  };
  