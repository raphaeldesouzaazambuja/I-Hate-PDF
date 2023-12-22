const { PDFDocument } = require('pdf-lib');
const fs = require('fs').promises;
const path = require('path');
const { format } = require('date-fns');

async function gerarPDFs(pastaEntrada, pastaSaida) 
{
    const arquivosPDF = await fs.readdir(pastaEntrada);

    for (const arquivoPDF of arquivosPDF) 
    {
        // verifica se é pdf
        if (path.extname(arquivoPDF).toLowerCase() === '.pdf') 
        {
            const caminho = path.join(pastaEntrada, arquivoPDF);
            const pdfBytes = await fs.readFile(caminho);
            const pdfDoc = await PDFDocument.load(pdfBytes);

            try 
            {
                await fs.access(pastaSaida);
            } 
            catch (error) 
            {
                await fs.mkdir(pastaSaida, { recursive: true });
            }

            const pastaSaidaPDF = path.join(pastaSaida, path.basename(arquivoPDF, '.pdf'));
            await fs.mkdir(pastaSaidaPDF, { recursive: true });

            // separa as paginas
            for (let i = 0; i < pdfDoc.getPageCount(); i++)
            {
                const novoPDF = await PDFDocument.create();
                const [paginaAtual] = await novoPDF.copyPages(pdfDoc, [i]);
                novoPDF.addPage(paginaAtual);

                const data = new Date();
                const nomeArquivo = format(data, 'dd_MM_HH_mm');

                const caminhoSaida = path.join(pastaSaidaPDF, `${nomeArquivo}_${i + 1}.pdf`);
                const novoPDFBytes = await novoPDF.save();
                await fs.writeFile(caminhoSaida, novoPDFBytes);
            }
        }
    }
}

gerarPDFs("./entrada", "./saida");