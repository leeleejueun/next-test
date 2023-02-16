import about from '@/styles/about.module.scss'
import { useRouter } from 'next/router'
import React from 'react'

const About = () => {
  const router = useRouter();
  console.log(router);
  function move(){
    // router.push('/board')
    router.push({
      pathname:'/board',
      query:{ id: 413}
    })
  }
  return (
    <div className={about.list}>
      about
      <button onClick={move}>게시판바로가기</button>
    </div>
  )
}

export default About