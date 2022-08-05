import Sidebar from '../../components/Sidebar'
import AdvertiseBar from '../../components/advertiseBar'
import ImageFileHandler from '../../components/ImageFileHandler'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import P2J from '../../public/PNG-To-JPG.png'

let PngToJpg = () => {
    const [Hydration, setHydration] = useState(false);

    useEffect(() => {
        setHydration(true)
    }, [])

    return (
        <>
            <Head>
                <title>Convert PNG To JPG - Freetoolsbox.com</title>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='description' content="Convert your PNG Images to JPG.This Free tool Supports mass convertion in a very short time and Download all Files at once.This tool don't upload files to the server to convert, It process images at your side only so this tool is 100% secure!" />
                <meta name='robots' content="index, follow" />
                <meta name="keywords" content="PNG, PNG file, PNG to JPG, convert PNG, PNG conversion, JPG, JPG conversion, image conversion,free" />

                <meta property="og:title" content="Convert PNG To JPG - Freetoolsbox.com" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://freetoolsbox.com/tools/png-to-jpg" />
                <meta property="og:site_name" content="freetoolsbox.com" />
                <meta property="og:description" content="Convert your PNG Images to JPG.This Free tool Supports mass convertion in a very short time and Download all Files at once.This tool don't upload files to the server to convert, It process images at your side only so this tool is 100% secure!" />
                <meta property="og:image" content="https://www.online-convert.com/assets/favicon/favicon-196x196.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@freetoolsbox" />
                <meta name="twitter:creator" content="@freetoolsbox" />
                <meta name="twitter:title" content="Convert PNG To JPG - Freetoolsbox.com" />
                <meta name="twitter:description" content="Convert your PNG Images to JPG.This Free tool Supports mass convertion in a very short time and Download all Files at once.This tool don't upload files to the server to convert, It process images at your side only so this tool is 100% secure!" />
                <meta name="twitter:image" content="https://www.online-convert.com/assets/favicon/favicon-196x196.png" />
            </Head>
            <div className="mainContent">
                <Sidebar />
                <div className='content'>
                    <center><h3 className='pageTitle'>Convert PNG To JPG Image</h3></center>
                    <center><span className='subTitle'>Convert PNG image to JPG image in Online Mode</span></center>
                    <ImageFileHandler convert_to={'jpg'} />
                    <div className="faqs">
                        <h2 className="title"><u>Frequently Asked Questions</u></h2>
                        <div className="questionBox">
                            <h4 className="question">How do I convert a PNG to JPG?</h4>
                            <h5 className="answer">
                                <ol type="1">
                                    <li>Choose the PNG file you want to convert.</li>
                                    <li>Click 'Convert Files' to convert.</li>
                                    <li>Click 'Download All' to download the converted files.</li>
                                </ol>
                            </h5>
                        </div>
                        <div className='questionBox'>
                            <h4 className='question'>What is a JPG?</h4>
                            <h5 className="answer">
                                JPG is a digital image format which contains compressed image data. With a 10:1 compression ratio JPG images are very compact. JPG format contains important image details. This format is the most popular image format for sharing photos and other images on the internet and between Mobile and PC users.
                            </h5>
                        </div>
                        <div className='questionBox'>
                            <h4 className='question'>What is a PNG?</h4>
                            <h5 className="answer">
                                PNG is short for Portable Network Graphic, a type of raster image file. It’s particularly popular file type with web designers because it can handle graphics with transparent or semi-transparent backgrounds. The file format isn’t patented, so you can open a PNG using any image editing software without the need for licensing.
                                <br /><br />
                                PNG files, which use the '.png' extension, can handle 16 million colours — which definitely sets them apart from most file types.
                            </h5>
                        </div>
                        <div className='questionBox'>
                            <h4 className='question'>Why convert PNG to JPG?</h4>
                            <h5 className="answer">
                                Consider converting your image file from PNG to JPG if you need a smaller file size. There are many reasons you might need an image file to be shrunken down. PNG is in a class of high quality image file types that retain all information and quality. However, Especially for businesses, JPG is superior because it plays a role in building websites.
                                <br /><br />
                                <center><Image src={P2J} height={'350px'} width={'550px'} /></center>
                                <br />
                                When a company builds its webpage, it knows the importance of keeping customers on the page. If a page takes too long to load, the customer leaves. This is why organizations convert PNG files to JPG. It creates a more compact image for websites, letting older computers and slower internet users view the site as well as others with superior connections.
                            </h5>
                        </div>
                        <div className='questionBox'>
                            <h4 className='question'>Are file converters safe?</h4>
                            <h5 className="answer">
                                online file converters promises first priority of users privacy and safety but can you trust them?  Most converters require you to upload your file to their server and then download the converted file, leaving you open to the possibility of carrying viruses and trojans to your computer.<br /><br />
                                Further, online converters make assurances to keep your information safe but do you really want to take the chance with sensitive and private files?<br /><br />

                                Freetoolsbox file converters are  absolutely safe to use because it don't use server to process files, no need to upload any file to the server, all files are converted in your bowser at your side only.
                            </h5>
                        </div>
                    </div>
                </div>

                <AdvertiseBar />
            </div>
        </>
    )
}

export default PngToJpg