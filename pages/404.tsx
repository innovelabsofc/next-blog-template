import type { NextPage } from 'next'
import Head from 'next/head'
import Wrapper from '../components/Wrapper'


const CustomErrorPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ooops! Page not found</title>
        <meta name="description" content="Burrow is Fawaz's personal site where he writes about tech, religion and life in general. The name is inspired from th Weasley's cozy home in Harry Potter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <main style={{minHeight : "80vh", display : "flex", justifyContent : "center", alignItems : "center", fontSize : "1.5rem", fontWeight : "500"}}>
            <p>Oops! Looks like this page does not exist</p>
        </main>
      </Wrapper>
      
    </div>
  )
}

export default CustomErrorPage
