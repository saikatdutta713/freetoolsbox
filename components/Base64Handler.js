import axios from "axios";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from 'next/image'
import Loader_src from '../static/Spinner-1s-200px.svg'

const base64Handler = (props) => {
    const [defaultImage, setDefaultImage] = useState(Loader_src)

    if (props.convert_from) {
        var convertFrom = props.convert_from[0].toUpperCase();
        convertFrom += props.convert_from.substr(1);
    } else if (props.convert_to) {
        var convertTo = props.convert_to[0].toUpperCase();
        convertTo += props.convert_to.substr(1);
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function downloadBase64() {
        // Generate download of hello.txt 
        // file with some content
        var text = document.getElementById("base64").value;
        var filename = props.convert_from + "Base64.txt";
        download(filename, text);
    }

    function download(file, text) {
        var element = document.createElement('a');
        text = text.trim();
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text));
        element.setAttribute('download', file);
        document.body.appendChild(element);
        //onClick property
        element.click();
        document.body.removeChild(element);
    }

    function copyBase64() {
        let base64 = document.getElementById('base64');
        base64.select();
        document.execCommand("copy");
    }

    function clearBase64(event) {
        let base64 = document.getElementById('base64');
        base64.value = '';
    }

    if (props.convert_from && (props.convert_from == "pdf" || props.convert_from == "image" || props.convert_from == "audio" || props.convert_from == "video" || props.convert_from == "file")) {

        function convertBase64() {
            let error_msg = document.getElementById('error_msg');

            let fileInput = document.getElementById('fileInput');
            let file = fileInput.files[0];

            if (file) {
                error_msg.innerHTML = ""
                document.getElementById("base64").value = 'Processing...'
                getBase64(file).then((result) => {
                    document.getElementById("base64").value = result;
                })
            } else {
                error_msg.innerHTML = "Please choose a file!"
            }
        }



        return (
            <>
                <div className="uploaderBox">
                    <div className="fileInputBox" >
                        <div class="mb-3">
                            <label for="fileInput" class="form-label">Local File *</label>
                            <input class="form-control" type="file" id="fileInput" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <button type="button" class="btn btn-primary" onClick={convertBase64}>{`Encode ${convertFrom} to Base64`}</button> <span id="error_msg" style={{ color: 'red', marginLeft: '20px' }}></span>
                    </div>
                    <br />
                    <div class="mb-3">
                        <label for="base64" class="form-label">Base64</label>
                        <textarea class="form-control" id="base64" rows="3" style={{ height: '100px' }} disabled></textarea>
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <button type="button" class="btn btn-primary" onClick={downloadBase64} style={{ marginRight: '15px' }}>Download</button>
                        <button type="button" class="btn btn-success" onClick={copyBase64} id='copyBase64' style={{ marginRight: '15px' }}>Copy</button>
                        <button type="button" class="btn btn-danger" onClick={clearBase64}>Clear</button>
                    </div>
                </div>
            </>
        )
    } else if (props.convert_from && (props.convert_from == "css" || props.convert_from == "html" || props.convert_from == "text")) {

        function convertBase64() {
            let error_msg = document.getElementById('error_msg');

            let input = document.getElementById('input').value;

            if (input) {
                error_msg.innerHTML = ""
                document.getElementById("base64").value = 'Processing...'

                try {
                    var encodedString = btoa(input)
                } catch (error) {
                    error_msg.innerHTML = error
                }
                document.getElementById("base64").value = encodedString
            } else {
                error_msg.innerHTML = "Please write to Encode!"
            }
        }

        return (
            <>
                <div className="uploaderBox">
                    <div className="fileInputBox" >
                        <div class="mb-3">
                            <label for="fileInput" class="form-label">{`${convertFrom} `}</label>
                            <textarea class="form-control" id="input" rows="3" style={{ height: '100px' }}></textarea>
                        </div>
                    </div>
                    <br />
                    <div>
                        <button type="button" class="btn btn-primary" onClick={convertBase64}>{`Encode ${convertFrom} to Base64`}</button> <span id="error_msg" style={{ color: 'red', marginLeft: '20px' }}></span>
                    </div>
                    <br />
                    <div class="mb-3">
                        <label for="base64" class="form-label">Base64</label>
                        <textarea class="form-control" id="base64" rows="3" style={{ height: '100px' }} disabled></textarea>
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <button type="button" class="btn btn-primary" onClick={downloadBase64} style={{ marginRight: '15px' }}>Download</button>
                        <button type="button" class="btn btn-success" onClick={copyBase64} id='copyBase64' style={{ marginRight: '15px' }}>Copy</button>
                        <button type="button" class="btn btn-danger" onClick={clearBase64}>Clear</button>
                    </div>
                </div>
            </>
        )
    } else if (props.convert_to && (props.convert_to == "pdf" || props.convert_to == "image" || props.convert_to == "audio" || props.convert_to == "file")) {

        function decodeBase64() {
            let error_msg = document.getElementById('error_msg');

            let input = document.getElementById('input').value;

            if (input) {
                error_msg.innerHTML = ""
                document.getElementById("base64").value = 'Processing...'

                try {
                    var decodedString = atob(input)
                } catch (error) {
                    error_msg.innerHTML = error
                }
                document.getElementById("base64").value = decodedString
            } else {
                error_msg.innerHTML = "Please enter Base64 string to Decode!"
            }
        }

        return (
            <>
                <div className="uploaderBox">
                    <div className="fileInputBox">
                        <div class="mb-3">
                            <label for="base64" class="form-label">Base64</label>
                            <textarea class="form-control" id="input" rows="3" style={{ height: '100px' }}></textarea>
                        </div>
                    </div>
                    <br />
                    <div>
                        <button type="button" class="btn btn-primary" onClick={decodeBase64}>{`Decode ${convertTo} from Base64`}</button> <span id="error_msg" style={{ color: 'red', marginLeft: '20px' }}></span>
                    </div>
                    <br />
                    <div class="mb-3 d-flex justify-content-center">
                        <section>
                            <label for="fileInput" class="form-label">{`${convertTo} `}</label>
                            <div id="imageViewer" className="imageViewer">
                                <Image src={defaultImage}></Image>
                            </div>
                        </section>
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <button type="button" class="btn btn-primary" onClick={downloadBase64} style={{ marginRight: '15px' }}>Download</button>
                        <button type="button" class="btn btn-success" onClick={copyBase64} id='copyBase64' style={{ marginRight: '15px' }}>Copy</button>
                        <button type="button" class="btn btn-danger" onClick={clearBase64}>Clear</button>
                    </div>
                </div>
            </>
        )
    } else if (props.convert_to && (props.convert_to == "css" || props.convert_to == "html" || props.convert_to == "text")) {

        function decodeBase64() {
            let error_msg = document.getElementById('error_msg');

            let input = document.getElementById('input').value;

            if (input) {
                error_msg.innerHTML = ""
                document.getElementById("base64").value = 'Processing...'

                try {
                    var decodedString = atob(input)
                } catch (error) {
                    error_msg.innerHTML = error
                }
                document.getElementById("base64").value = decodedString
            } else {
                error_msg.innerHTML = "Please enter Base64 string to Decode!"
            }
        }

        return (
            <>
                <div className="uploaderBox">

                    <div className="fileInputBox" >
                        <div class="mb-3">
                            <label for="base64" class="form-label">Base64</label>
                            <textarea class="form-control" id="input" rows="3" style={{ height: '100px' }}></textarea>
                        </div>
                    </div>
                    <br />
                    <div>
                        <button type="button" class="btn btn-primary" onClick={decodeBase64}>{`Decode ${convertTo} from Base64`}</button> <span id="error_msg" style={{ color: 'red', marginLeft: '20px' }}></span>
                    </div>
                    <br />
                    <div class="mb-3">
                        <label for="fileInput" class="form-label">{`${convertTo} `}</label>
                        <textarea class="form-control" id="base64" rows="3" style={{ height: '100px' }} disabled></textarea>
                    </div>
                    <br />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <button type="button" class="btn btn-primary" onClick={downloadBase64} style={{ marginRight: '15px' }}>Download</button>
                        <button type="button" class="btn btn-success" onClick={copyBase64} id='copyBase64' style={{ marginRight: '15px' }}>Copy</button>
                        <button type="button" class="btn btn-danger" onClick={clearBase64}>Clear</button>
                    </div>
                </div>
            </>
        )
    }
}
export default base64Handler