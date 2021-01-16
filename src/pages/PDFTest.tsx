import React from 'react'

import PageTemplate from '../components/templates/pageTemplate'
import Title from '../components/atoms/title'
import PDFViewer from '../components/PDFViewer/PDFViewer'
import PDFJs from '../backends/pdfjs';

const PDFTest: React.FC = () => {

    return (
        <div>
            <PageTemplate titlePage="PDFTest" mainModel="red-main">
                <Title label="PDFTest" />
                <div className="content-text">
                    <p className="justify-text">
                    Os itens do acervo do museu são disponibilizados em seis
                    categorias diferentes:. Cada
                    documento conterá as seguintes informações:
                    </p>

                    <h1>Opção 1 - Mozilla Git Extension</h1>
                    <PDFViewer
                        backend={PDFJs}
                        src="compressed.tracemonkey-pldi-09.pdf"
                        // src="pdf-test.pdf"
                    />

                    <h1>Opção 2 - Mozilla Git Extension</h1>
                    <PDFViewer
                        backend={PDFJs}
                        src="compressed.tracemonkey-pldi-09.pdf"
                        // src="pdf-test.pdf"
                    />

                    <h1>Opção 3 - Google API</h1>
                    <iframe height="1000" src="http://www.orimi.com/pdf-test.pdf" style={{border: 'none'}} width="100%"></iframe> OPÇÃO 1 - API GOOGLE
                    
                </div>
            </PageTemplate>
        </div>
    )
}

export default PDFTest
