class Spinner{
    handleClear() {
        if (ROOT_SPINNER) {
            ROOT_SPINNER.innerHTML = ' ';
            console.log('Spinner cleared');
        } else {
            console.error('ROOT_SPINNER is not defined');
        }
    }
    render(){
        const html = `
        <div class="spinner-container">
            <img class="spinner__img" src="components/Spinner/img/spinner.svg">
        </div>
        `;
        ROOT_SPINNER.innerHTML = html;

    }
}
const spinnerPage = new Spinner();