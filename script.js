document.getElementById("investmentForm").addEventListener("submit", function(event) {

    event.preventDefault();
    let P=Number(document.getElementById("initialInvestment").value);
    let r=Number(document.getElementById("interestRate").value);
    let retirementYear=Number(document.getElementById("retirementYear").value);

    let currentYear=new Date().getFullYear();
    let t=retirementYear-currentYear;

    if (!P || !r || !retirementYear) {
        alert("Please fill in all fields.");
        return;
    }
    if (t<=0) {
        alert("Retirement year must be in the future.");
        return;}

    let A=P*Math.pow((1=r/100), t);
    A=Math.round(A);
    document.getElementById("result").innerText =
        "Your investment will be worth $"+A+" when you retire.";
    document.getElementById("result").hidden=false;

});