import type { NextPage } from 'next'
import Head from 'next/head'
import fetchBlogPosts from '../helpers/fetchBlogPosts'
import formatDate from '../helpers/formatDate'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'
import styles from '../styles/Blog.module.css'

const Blog : NextPage = (props : any) => {


  return (

    <div>
      <Head>
        <title>Blog | Ideas and resources</title>
        <meta name="description" content="All of my ideas and resources and experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
      <main className={styles.main}>
          <p className={styles.intro}>I write about tech, experiences, thoughts, ideas, religion and life in general. Check out my posts below</p>
          <div className={styles.blogListDiv}>
              {
                  props.posts.map((p : any)=> {
                      return <div key={p.postId} className={styles.blogPost}>
                          <h3 className={styles.postTitle}><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                          <div className={styles.meta}>
                          <p>{formatDate(p.publishedDate)}</p>
                          <p>{p.tags.join(", ")}</p></div>
                            </div>
                  })
              }
          </div>
      </main>
      </Wrapper>
      </div>
  )
}

export const getStaticProps = async ()=> {

        const response = await fetchBlogPosts()
        const posts = await response.json()


    return {
        props : {
        posts : posts.data.blogPostCollection.items
    }
}

}

export default Blog
