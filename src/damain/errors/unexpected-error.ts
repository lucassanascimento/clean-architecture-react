export class UnexpectedError extends Error {
  constructor () {
    super('Ops... Algo deu errado, tente novamente.')
    this.name = 'UnexpectedError'
  }
}
