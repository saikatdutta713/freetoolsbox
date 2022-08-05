import Header from "../components/Header.js"
import Sidebar from "../components/Sidebar"
import AdvertiseBar from "../components/advertiseBar.js"
import Head from "next/head"
import Link from "next/link.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faMeteor, faComputer, faShield, faCloud } from '@fortawesome/free-solid-svg-icons'

let Index = () => {

  return (
    <>
      <Head>
        <title>Digitoolboxes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="mainContent">
        <AdvertiseBar />
        <div className="indexContent">
          <div className="container">
            <div className="d-flex flex-column text-center">
              <h2 className="title">Free Online Converter</h2>
              <h5 className="subtitle">Convert files,text,Base64 String to another in just few steps</h5>
            </div>
            <br />
            <br />
            <div className="d-flex flex-row justify-content-around">
              <ToolBox title={'IMAGE Converters'}>
                <Tool href='/tools/png-to-jpg'>PNG to JPG Converter</Tool>
                <Tool href='/tools/jpg-to-png'>JPG to PNG Converter</Tool>
                <Tool href='/tools/png-to-pdf'>PNG to PDF Converter</Tool>
                <Tool href='/tools/jpg-to-pdf'>JPG to PDF Converter</Tool>
                {/* <Tool href='/tools/pdf-to-png'>PDF to PNG Converter</Tool> */}
                {/* <Tool href='/tools/pdf-to-jpg'>PDF to JPG Converter</Tool> */}
              </ToolBox>
              <ToolBox title={'Image Compressor'}>
                <Tool href='/tools/png-to-jpg'>JPG Image Compressor</Tool>
                <Tool href='/tools/png-to-jpg'>PNG Image Compressor</Tool>
              </ToolBox>
              <ToolBox title={'PDF Converters'}>
                {/* <Tool>PDF to JPG Converter</Tool> */}
                {/* <Tool>PDF to PNG Converter</Tool> */}
                {/* <Tool>PDF to TEXT Converter</Tool> */}
                {/* <Tool>WORD to PDF Converter</Tool> */}
                {/* <Tool>PowerPoint to PDF Converter</Tool> */}
                <Tool>JPG to PDF Converter</Tool>
                <Tool>PNG to PDF Converter</Tool>
                <Tool>Merge PDF</Tool>
              </ToolBox>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around">
              <ToolBox title={'Encoder'}>
                <Tool href='/tools/pdf-to-base64'>PDF to Base64 Converter</Tool>
                <Tool href='/tools/image-to-base64'>Image to Base64 Converter</Tool>
                <Tool href='/tools/audio-to-base64'>Audio to Base64 Converter</Tool>
                <Tool href='/tools/video-to-base64'>Video to Base64 Converter</Tool>
                <Tool href='/tools/css-to-base64'>CSS to Base64 Converter</Tool>
                <Tool href='/tools/text-to-base64'>TEXT to Base64 Converter</Tool>
                <Tool href='/tools/html-to-base64'>HTML to Base64 Converter</Tool>
              </ToolBox>
              <ToolBox title={'Decode'}>
                <Tool href='/tools/base64-to-css'>Base64 To Css Converter</Tool>
                <Tool href='/tools/base64-to-text'>Base64 To Text Converter</Tool>
                <Tool href='/tools/base64-to-html'>Base64 To Html Converter</Tool>
                <Tool href='/tools/base64-to-image'>Base64 To Image Converter</Tool>
                <Tool href='/tools/base64-to-pdf'>Base64 To Pdf Converter</Tool>
              </ToolBox>
            </div>
          </div>
          <div className="info">
            <div className="d-flex flex-row justify-content-around text-center">
              <div className="d-flex flex-column justify-content-center w-50 m-4" >
                <FontAwesomeIcon icon={faMeteor} className="infoIcon mb-2" />
                <h4>Fast and easy to use</h4>
                <p>Just Choose the file you want to convert,click on Convert button. Wait a little for the process to complete. We aim to do all our conversions in under 1 minute.</p>
              </div>
              <div className="d-flex flex-column justify-content-center w-50 m-4" >
                <FontAwesomeIcon icon={faShield} className="infoIcon mb-2" />
                <h4>Guaranteed Security</h4>
                <p>We don't upload files to the server to convert, It process files at your side only, No one has access of your files so this tool is 100% secure!</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-around text-center">
              <div className="d-flex flex-column justify-content-center w-50 m-4" >
                <FontAwesomeIcon icon={faCloud} className="infoIcon mb-2" />
                <h4>In the cloud</h4>
                <p>All conversions take place in the cloud and will not consume any capacity from your computer.</p>
              </div>
              <div className="d-flex flex-column justify-content-center w-50 m-4" >
                <FontAwesomeIcon icon={faComputer} className="infoIcon mb-2" />
                <h4>All devices supported</h4>
                <p>Digitoolboxes is browser-based and works for all platforms. There is no need to download and install any software.</p>
              </div>
            </div>
          </div>
          <br />
        </div>
        <AdvertiseBar />
      </div>
    </>
  )
}
export default Index

const ToolBox = (props) => {

  return (
    <>
      <div className={`${'toolBox'} ${props.title.replaceAll(" ", "")}`}>
        <div className='title' id='toolboxtitle'>
          {props.title}
        </div>
        <div className='tools'>
          {props.children}
        </div>
      </div>
    </>
  )
}

const Tool = (props) => {
  return (
    <>
      <Link href={props.href ? props.href : ''}><div className='tool'><FontAwesomeIcon icon={faWrench} className={'icon'} /> <span className='toolName'>{props.children}</span></div></Link>
    </>
  )
}