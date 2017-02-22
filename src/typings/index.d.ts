type ConfigStream = {
    id: string,
    stream$: any
}

interface ObjectConstructor {
  values(o: any): any[];
  entries(o: any): [string, any][];
}
