import { useAtom } from 'jotai'
import React from 'react'
import { userAtom } from '../store'

const Transaction = () => {
    const [dataUser,setDataUser]= useAtom(userAtom)
    console.log(dataUser)
    
  return (
    <div>Transaction</div>
  )
}

export default Transaction