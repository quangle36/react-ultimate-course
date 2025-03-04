import Button from './components/Button';


/* note when render component in jsx
- name function should be UpperCase
- syntax like html tag: <xx />
const objA = { name: 'xx', theme mode: 'abc' } 
access properties object
objA.name
objA['theme mode']
*/
interface IAddress {
  city: string,
  ward: number
}

interface TypographyProps {
  title: string,
  isAdult: boolean,
  numbers: number[],
  address: IAddress,
  'theme-mode': string,
  onClick: () => void,
  component1: React.ElementType,
  component2: React.ReactNode
}

function Typography(props: TypographyProps) {
  console.log('Typography: ', props);
  const Component1 = props.component1;
  return (
    <div>
      Typography <br />
      Theme: {props['theme-mode']} <br />
      {/* Component1: {<props.component1 />}<br /> */}
      Component1: {<Component1 />}<br />
      Component2: {props.component2}
    </div>
  )
}

function Props() {
  return (
    <div>
      <h1>Props</h1>
      <Typography 
        title="author" // string
        isAdult={true} // boolean
        numbers={[1,2,3,4]} // array
        address={{
          city: 'hcm',
          ward: 14
        }} // object
        theme-mode="dark"
        onClick={() => {}} // function
        component1={Button} // function
        component2={<Button />} // react node 
      />
    </div>
  )
}

export default Props