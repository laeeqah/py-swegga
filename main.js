function display(){
    let femaleqty = document.getElementById("fqty").value;
    let maleQty = document.getElementById("mqty").value;


    let fprice = 150.95*femaleqty;
    let mprice = 180.95*maleQty;
    let total = fprice + mprice

    document.getElementById('fcal').innerHTML =fprice.toFixed(2);
    document.getElementById('mcal').innerHTML = mprice.toFixed(2);
    document.getElementById('total').innerHTML =total.toFixed(2);
}