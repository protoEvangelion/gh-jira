import * as fs from 'fs'
import * as path from 'path'

export function getCurrentBranchName(pathName = process.cwd()): string | boolean {
  const gitHeadPath = `${pathName}/.git/HEAD`
  const workingPathExists = fs.existsSync(pathName)
  const gitPathExists = fs.existsSync(gitHeadPath)

  if (workingPathExists) {
    return gitPathExists
      ? parseBranchName(gitHeadPath)
      : getCurrentBranchName(path.resolve(pathName, '..'))
  }

  return false
}

function parseBranchName(gitPath): string {
  return fs
    .readFileSync(gitPath, 'utf-8')
    .trim()
    .split('/')[2]
}

const gitlog = require('gitlog')

const gitHeadPath = `${process.cwd()}`

const options = { repo: gitHeadPath, number: 5, fields: ['subject'] }

let commits = gitlog(options)
console.log(commits.map(commit => commit.subject))
