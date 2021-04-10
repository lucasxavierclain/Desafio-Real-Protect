
const Menu = () => {
    return (
        <div>
            <h1>Resultado dos logs</h1>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
                </div>
                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Pesquise por data ou mensagem' id='busca' />
            </div>
        </div>
    )
}
export default Menu;