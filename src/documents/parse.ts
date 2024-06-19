import { UnstructuredLoader } from "@langchain/community/document_loaders/fs/unstructured";

export default async function parseFile(filePath: string): Promise<string> {
    const loader = new UnstructuredLoader(filePath, {
        apiUrl: 'http://127.0.0.1:8001/general/v0/general',
    });

    const docs = await loader.load()

    let docString = ''

    let totalDocCount = 0

    for (const [idx, doc] of docs.entries()) {
        totalDocCount++
        if (idx === 0) {
            docString = doc.pageContent
        } else {
            docString += `\n` + doc.pageContent
        }
    }

    console.log('totalDocCount', totalDocCount, docs.length)

    return docString
}
