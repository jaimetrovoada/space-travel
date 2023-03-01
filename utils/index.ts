export const routesArr = ["/", "/destination", "/crew", "/technology"];

export const routeNamesMap = new Map<string, string>();
routesArr.map((route) => {
  if (route === "/") {
    routeNamesMap.set(route, "home");
  } else {
    routeNamesMap.set(route, route.replace("/", ""));
  }
});
