import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";
import { Chroma } from "@langchain/community/vectorstores/chroma";
import {RecursiveCharacterTextSplitter} from "@langchain/textsplitters";
import {Args, Command} from '@oclif/core'

import parseFile from "../../documents/parse.js";

export default class DocumentAdd extends Command {
  static override args = {
    file: Args.string({description: 'file path', required: true}),
  }

  static override description = 'Add document to ChromaDB'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(DocumentAdd)

    const filePath = args.file
    this.log(`parsing file: ${filePath}`)

    const docString = await parseFile(filePath)

    this.log(`splitting doc`)

    const splitter = new RecursiveCharacterTextSplitter({
      chunkOverlap: 25,
      chunkSize: 200,
    });

    this.log(`chunking into documents`)

    const ids:string[] = []

    const documents = await splitter.createDocuments([docString])
    const documentsWithMetadata = documents.map((doc, idx) => {
      doc.metadata.id = filePath + "#" + idx
      ids.push(doc.metadata.id)
      return doc
    })

    this.log(`create ollama embeddings`)

    const embeddings = new OllamaEmbeddings({
      baseUrl: "http://localhost:11434",
      model: "mxbai-embed-large",
    })

    this.log(`chroma fromExistingCollection`)

    const vectorStore = await Chroma.fromExistingCollection(embeddings, {
      collectionName: "ontario-meetings",
      url: "http://localhost:8002"
    })

    this.log(`chroma addDocument`)

    const result = await vectorStore.addDocuments(documentsWithMetadata, {
      ids
    })

    console.log(result)
  }
}
