export const BasicTypes = () => {

  const name: string = 'Gerlin Matos'
  const age: number = 23
  const isActive: boolean = true

  const powers: string[] = ['React', 'React Native', 'Vue', 'Angular']

  return (
    <div>
      <h3>Basic Types</h3>
      {name} {age} {isActive ? 'true':'false'}
      <br/>
      {powers.join(', ')}
    </div>
  )
}
