import {createContext} from 'react'

type EditModeContextType = {
  editingTodoId: number | null
  setEditingTodoId: (id: number | null) => void
}

export const EditModeContext = createContext<EditModeContextType>({
  editingTodoId: null,
  setEditingTodoId: () => {},
})
