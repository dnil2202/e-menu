import { atom } from "jotai";

export const menuAtom = atom([])
export const cartAtom = atom([])
export const userAtom = atom([])

export const incAtom = atom(
    (get)=>get(cartAtom),
    (get,set,_arg)=>set(cartAtom[0].qty, get(cartAtom[0].qty)+1)
)
console.log(cartAtom)