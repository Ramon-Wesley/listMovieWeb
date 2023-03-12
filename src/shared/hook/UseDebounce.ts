import { useRef, useState, useCallback } from "react";

export const UseDebounce = (time = 1000, isFirstTime = true ) => {
  const isFirst = useRef<boolean>(isFirstTime);
  const debouncing = useRef<NodeJS.Timeout>();
  const debounce = useCallback(
    (func: () => void) => {
      if (isFirst.current) {
        isFirst.current = false;
        func();
      } else if (debouncing.current) {
        clearTimeout(debouncing.current);
      }
      debouncing.current = setTimeout(() => {
        func();
      }, time);
    },
    [time]
  );

  return { debounce };
};
