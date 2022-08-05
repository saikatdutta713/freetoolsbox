import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown, faWrench } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Sidebar = () => {

    const search = (e) => {
        const tool = document.getElementsByClassName('tool');

        let query = e.target.value.toLowerCase();
        Array.from(tool).forEach((singletool) => {
            let toolName = singletool.childNodes[3].innerHTML.toLowerCase();
            if (toolName.search(query) != -1) {
                singletool.style.display = '';
            } else {
                singletool.style.display = 'none';
            }
        })
    }

    return (
        <>
            <div className='sidebarTools'>
                <div className='search'>
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"><FontAwesomeIcon icon={faSearch} /></span>
                        <input type="text" id='search' class="form-control" onKeyUp={search} placeholder="Type to Search" autoComplete='off' />
                    </div>
                </div>
                <div className='toolBoxcontainer'>
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
                        <Tool href='/tools/jpg-to-pdf'>JPG to PDF Converter</Tool>
                        <Tool href='/tools/png-to-pdf'>PNG to PDF Converter</Tool>
                        <Tool>Merge PDF</Tool>
                    </ToolBox>
                    <ToolBox title={'Encoder'}>
                        <Tool href='/tools/pdf-to-base64'>PDF to Base64 Converter</Tool>
                        <Tool href='/tools/image-to-base64'>Image to Base64 Converter</Tool>
                        <Tool href='/tools/audio-to-base64'>Audio to Base64 Converter</Tool>
                        <Tool href='/tools/video-to-base64'>Video to Base64 Converter</Tool>
                        <Tool href='/tools/css-to-base64'>CSS to Base64 Converter</Tool>
                        <Tool href='/tools/text-to-base64'>TEXT to Base64 Converter</Tool>
                        <Tool href='/tools/html-to-base64'>HTML to Base64 Converter</Tool>
                    </ToolBox>
                    <ToolBox title={'Decoder'}>
                        <Tool href='/tools/base64-to-css'>Base64 To Css Converter</Tool>
                        <Tool href='/tools/base64-to-text'>Base64 To Text Converter</Tool>
                        <Tool href='/tools/base64-to-html'>Base64 To Html Converter</Tool>
                        <Tool href='/tools/base64-to-image'>Base64 To Image Converter</Tool>
                        <Tool href='/tools/base64-to-pdf'>Base64 To Pdf Converter</Tool>
                    </ToolBox>
                </div>
                <br /><hr />
            </div>

        </>
    )
}

export default Sidebar

const ToolBox = (props) => {

    return (
        <>
            <div className={`${'toolBox'} ${props.title.replaceAll(" ", "")}`}>
                <div className='title' id='toolboxtitle' onClick={() => setcloseToolbox(!closeToolbox)}>
                    {props.title}
                    <span>
                        {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                    </span>
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