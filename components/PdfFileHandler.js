import Head from "next/head"
import { faPlus, faTrash, faFileCircleCheck, faFileArrowDown, faCircleCheck, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import * as imageConversion from 'image-conversion';
import JSZip from "jszip"
import { saveAs } from "file-saver"
import { PDFDocument } from 'pdf-lib'
import download from 'downloadjs';

const FileUploader = (props) => {

    const [filesContainer, setfilesContainer] = useState(false);
    const [hydration, setHydration] = useState(false);
    const [reload, setReload] = useState(false);
    const [files, setFiles] = useState([]);
    const [pdfList, setPdfList] = useState([]);
    const [pdfAll, setPdfAll] = useState([]);
    const [disableDownloadbtn, setDisableDownloadBtn] = useState(true);


    useEffect(() => {
        setHydration(true);
        loadfilesUi();
        console.log(props.convert_to);
    }, [reload])

    const handleChoosebtn = () => {
        let fileinput = document.getElementById('fileinput')

        fileinput.click();
    }

    const addFiles = () => {
        document.getElementById('addfileinput').click();
    }

    const handleFileinput = (e) => {
        let selectedFiles = e.target.files;
        let tempFiles = [];
        for (let i = 0; i < selectedFiles.length; i++) {
            tempFiles.push(selectedFiles[i]);
        }
        setFiles(tempFiles);
        setfilesContainer(true);
    }

    const handleaddFileinput = (e) => {
        let selectedFiles = e.target.files;
        let tempFiles = [];
        tempFiles = files;
        for (let i = 0; i < selectedFiles.length; i++) {
            tempFiles.push(selectedFiles[i]);
        }
        setFiles(tempFiles);
        setReload(!reload);
    }

    const removeFile = (e) => {
        let index = e.target.getAttribute("fileId");
        let tempFiles = [];
        for (let i = 0; i < files.length; i++) {
            if (i != index) {
                tempFiles.push(files[i]);
            }
        }
        setFiles(tempFiles);
        setReload(!reload);
    }

    let removeAll = () => {
        setFiles([]);
        setfilesContainer(false);
        setReload(!reload);
    }

    const convert = () => {
        let files_class = document.getElementsByClassName('files');

        let fileState_converting = `<span class='converting_status'>Converting</span><span className='loader'><Image src='../static/Spinner-1s-200px.svg' height='30px' width='30px' style="margin-top: 3px;"/></span>`;
        let fileState_converted = '<span>Converted<Image src="../static/circle-check-regular.svg" height="19px" width="19px" style="margin-top: 5px;margin-left: 5px;"/></span>';

        if (props.convert_to == 'pdf') {
            let flag = 1;
            setDisableDownloadBtn(true);

            Object.keys(files_class).map((key, index) => {
                let fileTarget = files_class[key];
                let fileTarget_child = document.getElementById(fileTarget.attributes.id.value);
                let fileTarget_child_fileState = fileTarget_child.getElementsByClassName('fileState')[0];

                let downloadButton = document.querySelector(`#downloadButton_${index}`);
                let removeButton = document.querySelector(`#removeButton_${index}`);

                fileTarget_child_fileState.innerHTML = fileState_converting;

                let file = files[index];
                getBase64(file).then(async (base64) => {

                    const pdfDoc = await PDFDocument.create();
                    async function image() {
                        const ImageBytes = await fetch(base64).then((res) => res.arrayBuffer());
                        const embededImage = await pdfDoc.embedJpg(ImageBytes);
                        const page = await pdfDoc.addPage([embededImage.width > embededImage.height ? 841.89 : 595.28, embededImage.width > embededImage.height ? 595.28 : 841.89]);
                        const pageHeight = page.getHeight();
                        const pageWidth = page.getWidth();
                        page.drawImage(embededImage, {
                            x: 0,
                            y: 0,
                            width: embededImage.width > pageWidth ? pageWidth : embededImage.width,
                            height: embededImage.height > pageHeight ? pageHeight : embededImage.height
                        });
                    }
                    await image();

                    const pdfBytes = await pdfDoc.save();

                    let tempPdf = pdfList;
                    tempPdf.push(pdfBytes);
                    setPdfList(tempPdf);

                    fileTarget_child_fileState.innerHTML = fileState_converted;

                    downloadButton.style.display = 'block';
                    removeButton.style.display = 'none';

                    flag = flag + 1;

                    if (files.length != 1) {
                        if (flag == files.length) {
                            setDisableDownloadBtn(false);
                        }
                    } else {
                        setDisableDownloadBtn(false);
                    }

                })

            });
        } else if (props.convert_to == 'jpg') {
            let flag = 1;
            setDisableDownloadBtn(true);

            Object.keys(files_class).map(async (key, index) => {
                let fileTarget = files_class[key];
                let fileTarget_child = document.getElementById(fileTarget.attributes.id.value);
                let fileTarget_child_fileState = fileTarget_child.getElementsByClassName('fileState')[0];

                let downloadButton = document.querySelector(`#downloadButton_${index}`);
                let removeButton = document.querySelector(`#removeButton_${index}`);

                fileTarget_child_fileState.innerHTML = fileState_converting;

                let file = files[index];

                getBase64(file).then(async (base64) => {
                    // var PDF2Images = require('pdf2images-multiple')

                    // var convert_options = {
                    //     '-trim': '',
                    //     '-density': 150,
                    //     '-quality': 100,
                    //     '-sharpen': '0x1.0'
                    // }

                    // var pdf2images = PDF2Images('./foodir/foo.pdf', {
                    //     convert_options: convert_options, //optional
                    //     output_dir: '../pages/media/', //optional
                    //     ext: 'jpg', //optional, png is the default value
                    //     gm: true //Use GraphicksMagic //optional, false is the default value
                    // })

                    // pdf2images.pdf.convert((err, image_path) => {
                    //     //Do something when convert every single page.
                    //     console.log(image_path);
                    // }, (err, images_paths) => {
                    //     //Do something when convert full pdf file.
                    //     console.log('done');
                    // })



                })

            });

        }

    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    const loadfilesUi = () => {
        let selectedFiles = files;

        let jsx = [];

        Object.keys(selectedFiles).map((key, index) => {

            jsx.push(

                <div className="files" id={`file_${index}`}>
                    <div className="fileId" style={{ display: 'none' }}>{index}</div>
                    <div className="fileName">{selectedFiles[key]['name']}</div>
                    <div className="fileType">{selectedFiles[key]['type']}</div>
                    <div className="fileSize">{`${(selectedFiles[key]['size'] / 1024).toFixed(2)} KB`}</div>
                    <div className="fileState"><span style={{ color: "green" }}>Ready<FontAwesomeIcon icon={faCircleCheck} /></span></div>
                    <span>
                        <button fileId={index} id={`downloadButton_${index}`} className="downloadButton btn-primary" style={{ display: "none" }} onClick={downloadFile}><FontAwesomeIcon icon={faFileArrowDown} /> Download PDF</button>
                        <button fileId={index} id={`removeButton_${index}`} className="removeButton btn-primary" onClick={removeFile}><FontAwesomeIcon icon={faTrash} /> Remove</button>
                    </span>
                </div>
            );
        })

        return (jsx)

    }

    const downloadFile = (e) => {
        let fileId = e.target.attributes.fileId.value;
        const filename = files[fileId]['name'].split('.').slice(0, -1).join('.');

        download(pdfList[fileId], filename, "application/pdf");

    }

    const downloadAllFile = async () => {

        setDisableDownloadBtn(true)
        const pdfDoc = await PDFDocument.create();

        for (let index = 0; index < files.length; index++) {
            const embededPdf = await pdfDoc.embedPdf(pdfList[index])

            const page = pdfDoc.addPage([embededPdf[0].width, embededPdf[0].height])
            page.drawPage(embededPdf[0], {
                x: 0,
                y: 0,
                width: embededPdf[0].width,
                height: embededPdf[0].height
            })

        }
        const pdfBytes = await pdfDoc.save()
        setDisableDownloadBtn(false)
        download(pdfBytes, "AllImages", "application/pdf")
    }

    return (
        <>
            <div className="uploaderBox">
                <div className="fileUploader" id="fileUploader" onClick={handleChoosebtn}>
                    <div className="buttonContainer" style={{ display: filesContainer ? 'none' : 'block' }}>
                        <form>
                            <input type='file' id='fileinput' onChange={handleFileinput} className="visuallyhidden" name="files[]" multiple />
                            <input type='file' id='addfileinput' onChange={handleaddFileinput} className="visuallyhidden" name="files[]" multiple />
                        </form>
                        <button id='fileUploadbtn' type="button" onClick={handleChoosebtn} className="btn btn-primary btn-lg fileUploadbtn">Choose File</button>
                    </div>
                    <div className="filesContainer" style={{ display: filesContainer ? 'block' : 'none' }}>
                        <div>{loadfilesUi()}</div>
                        <div className="controlButtonBox">
                            <button className="addMoreFiles" onClick={addFiles}><FontAwesomeIcon icon={faPlus} /> Add More Files</button>
                            <button className="removeAll btn-danger" onClick={removeAll}><FontAwesomeIcon icon={faTrash} /> Remove All</button>
                            <button className="convert btn-primary" onClick={convert}><FontAwesomeIcon icon={faFileCircleCheck} /> Convert Files</button>
                            <button className="downloadAllFile btn-primary" onClick={disableDownloadbtn ? null : downloadAllFile} ><FontAwesomeIcon icon={faFileArrowDown} /> {disableDownloadbtn ? 'Please Wait...' : 'Download All'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FileUploader
