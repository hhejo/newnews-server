export function cachingDecorator(f, TIME_DIFF) {
  let lastUpdateTime = Date.now();
  let cache = null;
  return async (req, res) => {
    if (lastUpdateTime + TIME_DIFF > Date.now() && cache !== null) {
      console.log('cache');
      return res.json(cache);
    }
    const result = await f(req, res);
    cache = result;
    lastUpdateTime = Date.now();
    return result;
  };
}
