import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import UploadProofCard from '../UploadProofCard/UploadProofCard'
import { useLocation } from 'react-router'

const ChallengeLayout = (props) => {
    const location = useLocation();
    const data = location.state.data;
    const owner = location.state.owner;
  return (
    <>
        <Navbar />
        <main>
          <UploadProofCard data = {data} owner = {owner}/>
        </main>
        <Footer />
    </>
  )
}

export default ChallengeLayout