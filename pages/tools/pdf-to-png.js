import Sidebar from '../../components/Sidebar'
import AdvertiseBar from '../../components/advertiseBar'
import PdfFileHandler from '../../components/PdfFileHandler'
import Head from 'next/head';

let PdfToPng = () => {

    return (
        <>
            <Head>
                <title>Digitoolboxes - Convert PDF To PNG</title>
            </Head>
            <div className="mainContent">
                <Sidebar />
                <div className='content'>
                    <center><h3 className='pageTitle'>Convert PDF To PNG Image</h3></center>
                    <center><span className='subTitle'>Convert PDF file to PNG image file easily</span></center>
                    <PdfFileHandler convert_to={'png'} />
                </div>
                <AdvertiseBar />
            </div>
        </>
    )
}

export default PdfToPng