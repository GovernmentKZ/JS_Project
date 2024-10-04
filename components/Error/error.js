class ErrorPage {
    render() {
        const html = `
            <div class="error-container">
                <div class="error-massage">
                    <h3>Нет доступа!</h3>
                    <p>Попробуйте зайти позже</p>       
                </div>
            </div>
        `;

        if (ROOT_ERROR) {
            ROOT_ERROR.innerHTML = html;
        } else {
            console.error('ROOT_ERROR is not defined');
        }
    }
}
const errorPage = new ErrorPage();