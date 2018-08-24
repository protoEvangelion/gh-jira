import * as fs from 'fs'
import * as path from 'path'
import * as gitlog from 'gitlog'

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

function getCommitMessage(numberOfCommits = 1) {
  interface IOptions {
    subject
  }

  const options = { repo: process.cwd(), number: numberOfCommits, fields: ['subject'] }
  const commits: IOptions[] = gitlog(options)
  const commitMessages: string[] = commits.map(commit => commit.subject)

  return commitMessages
}

console.log(getCommitMessage(5))
