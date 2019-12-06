import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialValue => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue)
    console.log(document.getElementsByClassName('card'))

    useEffect(() => {
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode]
}

export default useDarkMode