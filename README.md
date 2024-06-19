govnews
=================

Local government document parsing for AI generated news, but can be used for any document types really.

# Commands
* [`govnews document add {path_to_file}`](#govnews-hello-person)
* [`govnews search "{query_to_search}""`](#govnews-hello-world)

```
EXAMPLE
  $ govnews document search "what are some recently approved expenses that exceed 1 million dollars?"
getting vectorStore
getting similar docs
prompting llm with:  [
  {
    id: 'pdfs/Document Viewer Ontario CA (1).pdf#47',
    loc: { lines: [Object] }
  },
  {
    id: 'pdfs/Document Viewer Ontario CA (2).pdf#45',
    loc: { lines: [Object] }
  },
  {
    id: 'pdfs/Document Viewer Ontario CA (1).pdf#33',
    loc: { lines: [Object] }
  },
  {
    id: 'pdfs/Document Viewer Ontario CA (1).pdf#70',
    loc: { lines: [Object] }
  },
  {
    id: 'pdfs/ontario_housing_minutes_4_16_2023.pdf#57',
    loc: { lines: [Object] }
  }
]
[
  [
    {
      text: 'Based on the provided context, some recently approved expenses that exceed $1 million dollars are:\n' +
        '\n' +
        '* Services in the amount of $1,296,000 (services contract)\n' +
        '* Use of SAMS Water, Cross Connection, and Industrial Pretreatment Program Compliance Software modules in the amount of $4,216,666 (water compliance software)\n' +
        '* Library Workstation Project in the amount of $2,363,889 (library workstation project)\n' +
        '* Approved Bills February 16, 2024 through February 29, 2024, in the amount of $21,219,394.51 (city bills and payroll)\n' +
        '* Approved Bills March 1, 2024 through March 14, 2024, in the amount of $22,330,391.30 (city bills and payroll)\n' +
        '\n' +
        'Note that these expenses are not necessarily new or recent, but rather were approved at some point after February 16, 2024.'
    }
  ]
]

```
