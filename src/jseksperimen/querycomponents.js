// Component A isinya fungsi render
export default function render(data) {
    const elView = document.querySelector('#viewdata');
    const [objekData] = data;
    elView.innerText = objekData.title;
}
