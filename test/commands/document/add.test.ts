import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('document:add', () => {
  it('runs document:add cmd', async () => {
    const {stdout} = await runCommand('document:add')
    expect(stdout).to.contain('hello world')
  })

  it('runs document:add --name oclif', async () => {
    const {stdout} = await runCommand('document:add --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
