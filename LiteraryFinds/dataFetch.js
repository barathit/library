fetch('./books.json')  //Promise based
.then((data) => data.json())
.then((objectData) => {
    // alert(objectData[0].author);
    let tableData = "";
    objectData.map((values) => {
        tableData += `
            <tr>
                <td>${values.title} - ${values.year}</td>
                <td>${values.author} - <a href=${values.link}>Book Details</a></td>
                <td>${values.language}</td>
            </tr>`
    })
    document.getElementById('tablebody').innerHTML = tableData;
})  
.catch((error) => {
    // console.log(`Error occures while fetching data ${error}`);
    document.getElementById('bookssection').innerHTML = 'Error Loading Data';
})
