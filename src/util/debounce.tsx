function deferred(ms: number) {
  let cancel;
  let promise = new Promise((resolve, reject) => {
    cancel = reject;
    setTimeout(resolve, ms);
  });
  return { promise, cancel };
}

export function debounce(fun: any, ms: number) {
  let funStatus = { promise: null, cancel: () => void 0 };
  return async (...args) => {
    try {
      funStatus.cancel();
      funStatus = deferred(ms);
      await funStatus.promise;
      await fun(...args);
    } catch (err) {
      /* prevent memory leak */
    }
  };
}
