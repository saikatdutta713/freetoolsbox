import Sidebar from '../../components/Sidebar'
import AdvertiseBar from '../../components/advertiseBar'
import Base64Handler from '../../components/Base64Handler'
import Head from 'next/head';

let DecodeBase64 = () => {

    return (
        <>
            <Head>
                <title>Convert Base64 String To Image File - Freetoolsbox.com</title>

                
            </Head>
            <div className="mainContent">
                <Sidebar />
                <div className='content'>
                    <center><h3 className='pageTitle'>Convert Base64 String To Image</h3></center>
                    <center><span className='subTitle'>Convert Base64 String to Image file  easily</span></center>
                    <Base64Handler convert_to={'image'} />
                    <div className='faqs'>
                        <h2 className="title"><u>Frequently Asked Questions</u></h2>
                        <div className="questionBox">
                            <h4 className="question">How do I convert Base64 string to Image?</h4>
                            <h5 className="answer">
                                <ol type="1">
                                    <li>paste the base64 string that you want to convert to image file.</li>
                                    <li>Click Decode button to convert.</li>
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

export default DecodeBase64