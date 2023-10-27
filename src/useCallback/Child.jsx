import { React,memo } from 'react'
function Child() {
    console.log("child componet")
  return (
    <div>Child</div>
  )
}

export default memo (Child)





