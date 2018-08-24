import { Command, flags } from '@oclif/command'

export default class Jira extends Command {
  static aliases = ['ji']

  public static args = [
    {
      name: 'issue',
      required: false,
      description: 'Issue you would like to target',
    },
  ]

  static description = 'Create, comment, transition, get status, or open an issue in browser'

  static examples = [
    `$ gh jira LPS-123 --status
hello world from ./src/hello.ts!
`,
  ]

  public static flags = {
    help: flags.help({ char: 'h' }),

    status: flags.boolean({ char: 's', description: 'Show current status of the issue' }),
  }

  async run() {
    const { args } = this.parse(Jira)

    console.log('args', args.issue)
  }
}
