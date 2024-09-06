function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
    section.innerHTML = `<p class="item-resultado">Digite algum nome para efetuar a pesquisa.</p>`;

        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada atleta no array `atletas`
    for (let dado of atletas) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

            // Constrói o HTML para cada item do resultado da pesquisa,
            // incluindo o título, descrição e link para mais informações
            resultados += `
        <div class="item-resultado">
        <h2>
            <a class="item-resultado" href="https://pt.wikipedia.org/wiki/Tel%C3%AA_Santana#:~:text=Tel%C3%AA_Santana_da_Silva%..." target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
    `;
        }
    }

    if (!resultados) {
        resultados = `<p class="item-resultado">Nenhum Atleta encontrado! Entre com outro nome.</p>`;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}