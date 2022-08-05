import Sidebar from '../../components/Sidebar'
import AdvertiseBar from '../../components/advertiseBar'
import Base64Handler from '../../components/Base64Handler'
import Head from 'next/head';

let EncodeToBase64 = () => {

    return (
        <>
            <Head>
                <title>Digitoolboxes - Convert Html File To Base64 String</title>

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name='description' content="Convert your HTML to base64 string.This Free online tool converts HTML in a very short time and Download base64 string in a text file.This tool don't upload files to the server to convert, It process files at your side only so this tool is 100% secure!" />
                <meta name='robots' content="index, follow" />
                <meta name="keywords" content="HTML to base64,convert HTML to base64,HTML to base64 online,free" />

                <meta property="og:title" content="Convert HTML To Base64 String - Freetoolsbox.com" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://freetoolsbox.com/tools/html-to-base64" />
                <meta property="og:site_name" content="freetoolsbox.com" />
                <meta property="og:description" content="Convert your HTML to base64 string.This Free online tool converts HTML in a very short time and Download base64 string in a text file.This tool don't upload files to the server to convert, It process files at your side only so this tool is 100% secure!" />
                <meta property="og:image" content="https://www.freetoolsbox.com/favicon/favicon-196x196.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@freetoolsbox" />
                <meta name="twitter:creator" content="@freetoolsbox" />
                <meta name="twitter:title" content="Convert HTML To Base64 String - Freetoolsbox.com" />
                <meta name="twitter:description" content="Convert your HTML to base64 string.This Free online tool converts HTML in a very short time and Download base64 string in a text file.This tool don't upload files to the server to convert, It process files at your side only so this tool is 100% secure!" />
                <meta name="twitter:image" content="https://www.freetoolsbox.com/favicon/favicon-196x196.png" />
            </Head>
            <div className="mainContent">
                <Sidebar />
                <div className='content'>
                    <center><h3 className='pageTitle'>Convert Html To Base64 String</h3></center>
                    <center><span className='subTitle'>Convert Html to Base64 String easily</span></center>
                    <Base64Handler convert_from={'html'} />
                    <div className="faqs">
                        <h2 className="title"><u>Frequently Asked Questions</u></h2>
                        <div className="questionBox">
                            <h4 className="question">How do I convert HTML to base64?</h4>
                            <h5 className="answer">
                                <ol type="1">
                                    <li>Write/paste the HTML you want to Encode to base64.</li>
                                    <li>Click Encode button to convert.</li>
                                    <li>Click 'Download' button to download the base64 string in text file.</li>
                                </ol>
                            </h5>
                        </div>
                        <div className='questionBox'>
                            <h4 className='question'>What is Base64 string?</h4>
                            <h5 className="answer">
                                Base64 is an encoding algorithm that converts any characters, binary data, and even images or sound files into a readable string, which can be saved or transported over the network without data loss. The characters generated from Base64 encoding consist of Latin letters, digits, plus, and slash.
                            </h5>
                        </div>
                        <div className='questionBox'>
                            <h4 className='question'>Why do we need Base64 encoding?</h4>
                            <h5 className="answer">
                                From wiki: “Base64 encoding schemes are commonly used when there is a need to encode binary data that needs be stored and transferred over media that are designed to deal with textual data. This is to ensure that the data remains intact without modification during transport”.
                            </h5>
                        </div>
                        <div className='questionBox'>
                            <h4 className='question'>Is Base64 safe?</h4>
                            <h5 className="answer">
                                Encoding data into base64 format
                                <br /><br />
                                By consisting only of ASCII characters, base64 strings are generally url-safe, and that's why they can be used to encode data in Data URLs.
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

export default EncodeToBase64