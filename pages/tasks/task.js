import Head from 'next/head'
import Layout from '../../components/layout/layout'

export default function Task() {
  return (
    <Layout title={"Task"}>
      <Head>
        <title>My Tasks</title>
      </Head>
      <h1>Task</h1>
    </Layout>   
    
  )
  }