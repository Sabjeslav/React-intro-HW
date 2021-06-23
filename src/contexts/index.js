import { createContext } from 'react';
import constants from '../constants';

const { THEMES } = constants;

export const UserContext = createContext(null);
export const ThemeContext = createContext(THEMES.LIGHT);
export const TasksContext = createContext(null);
