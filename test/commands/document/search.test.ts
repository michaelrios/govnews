import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('document:search', () => {
  it('runs document:search cmd', async () => {
    const {stdout} = await runCommand('document:search')
    expect(stdout).to.contain('hello world')
  })

  it('runs document:search --name oclif', async () => {
    const {stdout} = await runCommand('document:search --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
