import { createContext } from 'react';

interface EditModeContextProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

export const EditModeContext = createContext<EditModeContextProps>({
  isEditing: false,
  setIsEditing: () => {},
});
