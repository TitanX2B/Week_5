
function userForm() {
    const FirstName = document.getElementById('first-name').value;
    const LastName = document.getElementById('last-name').value;
    const Email = document.getElementById('email').value;
    const Address = document.getElementById('address').value;
    const City = document.getElementById('city').value;
    const Province = document.getElementById('province').value;
    const Membership = document.querySelector('input[name="membership"]:checked').value;
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Full Name: ${FirstName} ${LastName}</p>
                           <p>Email: ${Email}</p>
                           <p>Address: ${Address}, ${City}, ${Province}</p>
                           <p>Membership: ${Membership}</p>`;
}

function myExcelFuns() {
    const numbersInput = document.getElementById('numbers').value.trim();
    if (!numbersInput) {
        alert('Please enter some numbers');
        return;
    }
    
    const numberArr = numbersInput.split(' ').map(Number).filter(n => !isNaN(n));
    if (numberArr.length === 0) {
        alert('Please enter valid numbers');
        return;
    }
    
    let r;
    if (document.getElementById('sum').checked) {
        r = numberArr.reduce((acc, num) => acc + num, 0);
    } else if (document.getElementById('average').checked) {
        r = numberArr.reduce((acc, num) => acc + num, 0) / numberArr.length;
    } else if (document.getElementById('max').checked) {
        r = Math.max(...numberArr);
    } else {
        r = Math.min(...numberArr);
    }
    
    document.getElementById('result').innerText = `Result: ${r}`;
}
