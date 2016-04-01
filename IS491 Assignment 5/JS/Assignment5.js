function GetCustomer()
{
    var objCustomer = new XMLHttpRequest();
    
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers"
    
    objCustomer.onreadystatechange = function()
    {
        if (objCustomer.readyState == 4 && objCustomer.status == 200)
        {
            var output = JSON.parse(objCustomer.responseText);
            GenerateOutput(output);
        }
    }
     objCustomer.open("GET", url, true);
     objCustomer.send();
}
function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "<table><tr><th>Customer Name</th><th>Customer ID</th><th>Customer City</th></tr>";
    
    for (count = 0; count < result.GetAllCustomersResult.length; count++)
    {
        displaytext += "<tr><td>" + result.GetAllCustomersResult[count].CompanyName + "</td><td>" + 
        result.GetAllCustomersResult[count].CustomerID + "</td><td>" +
        result.GetAllCustomersResult[count].City + "</td></tr>";
    }
    displaytext += "</table>"
    document.getElementById("customerdisplay").innerHTML = displaytext;
}

function GetOrders()
{
    var objOrders = new XMLHttpRequest();
    
    var url1 = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url1 += document.getElementById("custid").value;
    
    objOrders.onreadystatechange = function()
    {
        if (objOrders.readyState == 4 && objOrders.status == 200)
        {
            var display = JSON.parse(objOrders.responseText);
            GenerateOrder(display);
        }
    }
     objOrders.open("GET", url1, true);
     objOrders.send();
}
function GenerateOrder(order)
{
    var count = 0;
    var displayorder = "<table><tr><th>Product Name</th><th>Quantity</th></tr>";
    
    for (count = 0; count < order.length; count++)
    {
        displayorder += "<tr><td>" + order[count].ProductName
        + "</td><td>" + 
        order[count].Total + "</td></tr>";
    }
    displayorder += "</table>"
    document.getElementById("orderdisplay").innerHTML = displayorder;
}

function GetServices()
{
    var objService = new XMLHttpRequest();
    
    var url2 = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url2 += document.getElementById("custid1").value;
    
    objService.onreadystatechange = function()
    {
        if (objService.readyState == 4 && objService.status == 200)
        {
            var service = JSON.parse(objService.responseText);
            GenerateService(service);
        }
    }
     objService.open("GET", url2, true);
     objService.send();
}
function GenerateService(service)
{
    var count = 0;
    var displayservice = "<table><tr><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Ship Post Code</th><th>Ship Date</th></tr>";
    
    for (count = 0; count < service.GetOrdersForCustomerResult.length; count++)
    {
        displayservice += "<tr><td>" + service.GetOrdersForCustomerResult[count].OrderDate
        + "</td><td>" + 
        service.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + 
        service.GetOrdersForCustomerResult[count].ShipAddress
        + "</td><td>" + 
        service.GetOrdersForCustomerResult[count].ShipCity + "</td><td>" +
        service.GetOrdersForCustomerResult[count].ShipName
        + "</td><td>" + 
        service.GetOrdersForCustomerResult[count].ShipPostCode + "</td><td>" +
        service.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
        ;
    }
    displayservice += "</table>"
    document.getElementById("servicedisplay").innerHTML = displayservice;
}

function MenuChoice()
{
    if (document.getElementById("menu").value == "Customer Table")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
    }else if (document.getElementById("menu").value == "Customer Order History")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Customer Orders")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
     }else
     {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
     }
}
