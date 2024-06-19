import {OllamaEmbeddings} from "@langchain/community/embeddings/ollama";
import { Ollama } from "@langchain/community/llms/ollama";
import {Chroma} from "@langchain/community/vectorstores/chroma";
import {Args, Command} from '@oclif/core'

export default class DocumentSearch extends Command {
  static override args = {
    searchParam: Args.string({description: 'string to search for', required: true}),
  }

  static override description = 'Search Vector DB for documents'

  static override examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const {args} = await this.parse(DocumentSearch)

    const embeddings = new OllamaEmbeddings({
      baseUrl: "http://localhost:11434", // default value
      model: "mxbai-embed-large",
    })

    this.log('getting vectorStore')
    const vectorStore = await Chroma.fromExistingCollection(embeddings, {
      collectionName: "ontario-meetings",
      url: "http://localhost:8002"
    })

    this.log('getting similar docs')
    const response = await vectorStore.similaritySearch(args.searchParam, 20)

    const ollama = new Ollama({
      baseUrl: "http://localhost:11434",
      model: "llama3",
    });

    let prompt = `reply to the following:\n`+
        args.searchParam + `\n`+
        `using only the following context:\n`

    for (const item of response) {
      prompt += item.pageContent + `\n`
    }

    this.log('prompting llm with: ', response.map((item) => item.metadata))
    const llmResponse = await ollama.generate([prompt])

    console.log(llmResponse.generations)
  }
}
