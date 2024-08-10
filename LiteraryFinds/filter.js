function filterbyType()
{
    const tableRows = document.querySelectorAll("table tbody tr");
    console.log(tableRows);

    tableRows.forEach((row)=>
    {
        row.querySelectorAll("td:nth-child(3)")[0].textContent == "English"
        ? (row.style.display = "table-row") //Making Visible
        : (row.style.display = "none");

    })
    
}