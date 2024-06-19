import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export default async function generateEmbeddings(document: string): Promise<number[][]> {
    const splitter = new RecursiveCharacterTextSplitter({
        chunkOverlap: 500,
        chunkSize: 7500,
    });

    const splitDocument = await splitter.createDocuments([document])

    const embeddings = new OllamaEmbeddings({
        baseUrl: "http://localhost:11434", // default value
        model: "nomic-embed-text",
    });

    const documents = splitDocument.map<string>((document) => document.pageContent)

    return embeddings.embedDocuments(documents)
}
