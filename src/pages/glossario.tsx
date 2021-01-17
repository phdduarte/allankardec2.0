import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import Link from '../components/atoms/link'
<<<<<<< HEAD
import PDFViewer from '../components/PDFViewer/PDFViewer'
=======
>>>>>>> origin

const Glossario: React.FC = () => {

    const listInText = (arrList) => {
        const listSize = arrList.length
        let i = 0
        return arrList.map(l => {
            i++
            if (i === listSize) {
<<<<<<< HEAD
=======
                console.log("aaa")
>>>>>>> origin
                return (
                    <React.Fragment>
                        {" "}<Link key={l.url} label={l.label} url={`/${l.url}`}/>
                    </React.Fragment>
                )
            }
            else {
                return (i === listSize - 1) ?
                    <React.Fragment>
                        {" "}<Link key={l.url} label={l.label} url={`/${l.url}`}/>{" e"}
                    </React.Fragment> :
                    <React.Fragment>
                        {" "}<Link key={l.url} label={l.label} url={`/${l.url}`}/>{","}
                    </React.Fragment>
            }
        })
    }

    const glossaryLinks = [
        {label: 'Manuscritos',url: 'manuscritos'},
        {label: 'Cartas',url: 'cartas'},
        {label: 'CSI do Espiritismo',url: 'fotos'},
        {label: 'Jornais',url: 'jornais'},
        {label: 'Livros',url: 'livros'},
        {label: 'Revistas',url: 'revistas'}
    ]

    const glossaryTerms = [
        {
            title: 'ID',
            description: `Identificação do documento do tipo AAAAMMDD#NÚMERO
                (Ano, Mês e Dia do documento, seguido de um número sequencial)`
        }, 
        {
            title: 'DESCRIÇÃO',
            description: `Descrição completa do documento, facilitando as
                pesquisas através da ferramenta de busca do site e possíveis
                referências em artigos`
        }, 
        {
            title: 'TÍTULO',
            description: `“Nome” e breve relato do documento`
        }, 
        {
            title: 'PROPRIETÁRIO',
            description: `Proprietário ou autor do documento`
        }, 
        {
            title: 'DATA',
            description: `Data do documento - Esta data se refere à data do
                documento, seja a da constante do manuscrito/carta, seja a do
                lançamento/publicação da obra (livro/jornal/revista). Na falta
                da data completa, utilizaremos o último dia do mês e ano
                constante no item, ou o último dia do ano constante na referida
                obra`
        }, 
        {
            title: 'NÚMERO DE FOLHAS',
            description: `Informa a quantidade de folhas/páginas do documento`
        }
    ]

    return (
        <div>
            <PageTemplate titlePage="GLOSSÁRIO" mainModel="red-main">
                <Title label="Glossário" />
                <div className="content-text">
                    <p className="justify-text">
                    Os itens do acervo do museu são disponibilizados em seis
                    categorias diferentes: {listInText(glossaryLinks)}. Cada
                    documento conterá as seguintes informações:
                    </p>
                    
                    <ul className="text-justify" style={{listStyle: 'none'}}>
                        {glossaryTerms.map(term => {
                            return (
                                <li key={term.title} style={{marginBottom: '10pt'}}>
                                    <strong>{term.title}</strong>: {term.description}.
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </PageTemplate>
        </div>
    )
}

export default Glossario
