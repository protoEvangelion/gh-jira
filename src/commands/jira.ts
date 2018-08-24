import {Command, flags} from '@oclif/command'

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

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(Jira)


  }
}
