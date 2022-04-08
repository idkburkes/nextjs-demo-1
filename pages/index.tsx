import type { NextPage } from 'next'

import Header from '../components/Header'
import CreatePanel from '../components/CreatePanel'
import Footer from '../components/Footer'
import AdminDisplay from '../components/AdminDisplay'

const Home: NextPage = () => {
  return (
    <div className="bg-[#ecfdf5]">
      <Header title={"Cookie Stand Admin"}/>
      <AdminDisplay />
      <Footer copyrightYear="2021"> </Footer>
    </div>
  )
}

export default Home
