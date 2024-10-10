import { useCallback, useRef } from "react";

export function useDebounce(callback: (val: string) => void, delay: number) {
    const timer = useRef<NodeJS.Timeout | null>(null);

    const debounceCallback = useCallback((val: string) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(val)
        }, delay)
    }, [callback, delay]);

    return debounceCallback;
};