import Sidebar from '../../components/Sidebar'
import AdvertiseBar from '../../components/advertiseBar'
import PdfFileHandler from '../../components/PdfFileHandler'
import Head from 'next/head';

let JpgToPdf = () => {

    return (
        <>
            <Head>
                <title>Digitoolboxes - Convert PDF To JPG</title>
            </Head>
            <div className="mainContent">
                <Sidebar />
                <div className='content'>
                    <center><h3 className='pageTitle'>Convert PDF To JPG Image</h3></center>
                    <center><span className='subTitle'>Convert PDF file to JPG image file easily</span></center>
                    <PdfFileHandler convert_to={'jpg'} />
                </div>
                <AdvertiseBar />
            </div>
        </>
    )
}

export default JpgToPdf