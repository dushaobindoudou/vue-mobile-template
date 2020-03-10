
function concatRoute(baseRoute, ...attachRoutes) {
  let resultRoute = [...baseRoute];
  attachRoutes.forEach((v) => {
    resultRoute = resultRoute.concat(v);
  })
  return resultRoute;
}

export {
  concatRoute,
}

export default {
  concatRoute,
};
