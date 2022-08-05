import { faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Loader from "../static/Spinner-1s-200px.svg"
import img from "../public/Digitoolboxes.png"
import * as imageConversion from 'image-conversion';
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import Head from 'next/head'
import { PDFDocument } from 'pdf-lib'
import download from 'downloadjs';



const test = () => {
    const [loader, setLoader] = useState(false);
    const [response, setResponse] = useState([]);
    const [base64, setBase64] = useState('');


    let submit = (e) => {
        e.preventDefault();
        let form = document.querySelector('form');
        let input = document.querySelector('input');


        const files = input.files;


        console.log(input.value);

        getBase64(file).then(base64 => {

        });


    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function urltoFile(url, filename, mimeType) {
        return (fetch(url)
            .then(function (res) { return res.arrayBuffer(); })
            .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
        );
    }


    return (
        <>
            <br />
            <br />
            <center>
                <form>
                    <input type={'file'} name={'file'} multiple />
                    <br />
                    <br />
                    <button onClick={submit}>Upload</button>
                </form>
            </center>

        </>
    )
}
export default test;
