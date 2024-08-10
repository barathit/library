function searchBooks()
{
    const searchInput = document.getElementById('search');
    //console.log(searchInput)
    const rows = document.querySelectorAll("table tbody tr");
    // console.log(rows)

    searchInput.addEventListener("keyup", function (event) {
        const userQuery = event.target.value.toLowerCase();
        let count = 0;

        rows.forEach((row) => {
            // Row refers to <td>
            row.querySelector("td").textContent.toLowerCase().startsWith(userQuery)
            ? (row.style.display = "table-row", ++count) //Making Visible
            : (row.style.display = "none");
        });
        
        document.getElementById('countResult').innerHTML = `${count} Books Found`
    })

}
