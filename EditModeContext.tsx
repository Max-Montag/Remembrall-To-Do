import { createContext } from "react";

type EditModeContextType = {
  editingNoteId: number | null;
  setEditingNoteId: (id: number | null) => void;
};

export const EditModeContext = createContext<EditModeContextType>({
  editingNoteId: null,
  setEditingNoteId: () => {},
});
