// if (process.browser) {
//     let pages = ['/Login', '/Register'];
//     if (!pages.includes(window.location.pathname)) {
//         const tool = document.getElementsByClassName('tool');
//         const searchInput = document.getElementById('search');

//         searchInput.addEventListener('keyup', (e) => {
//             e.stopImmediatePropagation();

//             let query = searchInput.value.toLowerCase();
//             Array.from(tool).forEach((singletool) => {
//                 let toolName = singletool.childNodes[3].innerHTML.toLowerCase();
//                 if (toolName.search(query) != -1) {
//                     singletool.style.display = '';
//                 } else {
//                     singletool.style.display = 'none';
//                 }
//             })
//         })
//     }
// }