const onSubmit = async input => {
    const inputData = document.getElementsByClassName('input')[0].value;
    const response = await fetch(`http://localhost:1235?name=${inputData}`);
    const data = await response.text();
    console.log(data)
}