import { ActionCreator } from 'redux'
import { IReduxAction } from '../types'

export const THEME_SWITCH = 'THEME_SWITCH'


export const ThemeSwitch: ActionCreator<IReduxAction> = () => ({
  type: THEME_SWITCH,
})



