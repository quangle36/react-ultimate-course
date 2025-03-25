import Button from './components/Button';
import { useAppContext } from './contexts/AppContext';


/* note when render component in jsx
- name function should be UpperCase
- syntax like html tag: <xx />
const objA = { name: 'xx', theme mode: 'abc' } 
access properties object
objA.name
objA['theme mode']
const name  = xxx;

destructuring operator / rename default value
// const name = objA.name
const { name: nameObjA } = objA;

// rest operator -> get all remain properties
const { name, ...rest } = objA;

// speard operator -> dàn trải/phân rã các properties thay vì đi khai báo từng cái
*/

interface IAddress {
  city: string,
  ward: number
}

interface TypographyProps extends React.PropsWithChildren {
  title: string,
  isAdult?: boolean,
  numbers: number[],
  address: IAddress,
  'theme-mode': string,
  onClick: () => void,
  component1: React.ElementType,
  component2: React.ReactNode,
}

function Typography({ component1: Component1, component2, isAdult = false, children, ...restProps }: TypographyProps) {
  // console.log('Typography: ', props);
  // const Component1 = props.component1;
  console.log('isAdult: ', {
    restProps,
    Component1,
    component2
  })
  return (
    <div>
      Typography <br />
      Theme: {restProps['theme-mode']} <br />
      {/* Component1: {<props.component1 />}<br /> */}
      Component1: <Component1 /><br />
      Component2: {component2} <br />
      {children} <br />
    </div>
  )
}

function Props() {
  const { addTodo } = useAppContext();

  return (
    <div>
      <h1>Props</h1>
      <Typography 
        title="author" // string
        numbers={[1,2,3,4]} // array
        address={{
          city: 'hcm',
          ward: 14
        }} // object
        theme-mode="dark"
        onClick={() => {}} // function
        component1={Button} // react element
        component2={<Button />} // react node 
      >
        this is children
      </Typography>

      <h3>Demo spread & rest operator</h3>
      <Button 
        buttonText="Update Count"
        className='text-primary'
        onClick={() => console.log("update count")}
      />

      <button onClick={() => addTodo({
        id: Date.now(),
        title: 'Title' + Date.now()
      })}>Add Todo</button>

    </div>
  )
}

export default Props