//.....

function calculateReport(date, type, employee, unitId, register)
{
    // a lot of legacy
}

function calculateReportAnalytics(date, employee, unitId, register)
{
    //....
}


function calculateReportOffice(date, employee, unitId, register)
{
    //....
}

//.....

class Cell {
    x() {};
    y() {};
}

class Grid {
    // Старый интерфейс:
    addCll(x, y) {};
    fetchCell(x, y) {};

    //...

    //Новый интерфейс существует параллельно:
    addSpecificCell(cell) {};
    fetchSpecificCell(cell) {};
}