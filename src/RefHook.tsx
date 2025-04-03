import React from 'react'

/* ref
- You can store information between re-renders (unlike regular variables, which reset on every render).
- Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
- reference to DOM element
*/

const TestElement = React.forwardRef((props, ref) => {
  console.log("TestElement props: ", {
    props,
    ref
  })
  return (
    <div ref={ref}>
      TestElement
    </div>
  )
});

function RefHook() {
  const refCount = React.useRef(10);
  const refDivVirtual = React.useRef<HTMLInputElement>(null);
  const refTest = React.useRef<HTMLInputElement>(null);
  const [timestamp, setTimestamp] = React.useState(Date.now());
  const refStepper = React.useRef({
    step1: {
    },
    step2: {

    }
  })
  const reftParentElement = React.useRef<any>(null);
  // let count = 10;
  // const [count, setCount] = React.useState(10);

  function updateTimeStamp() {
    // count = count + 10; // 20
    // setCount(prevState => prevState + 10)
    refCount.current = refCount.current + 10;
    reftParentElement.current!.style.color = '#f00'
    setTimestamp(Date.now())
  };

  React.useEffect(() => {
    console.log('ref hook: ', {
      refTest: refTest.current
    })
  })

  function updateForm() {
    refTest.current?.focus();
    refTest.current?.select();

    refDivVirtual.current?.scrollTo({
      behavior: 'smooth',
      top: 300
    })

    refStepper.current = {
      ...refStepper.current,
      step1: {
        firstName: 'tony',
        lastName:  'nguyen'
      }
    }
    setTimestamp(Date.now())
  }

  console.log("stepper form: ", {
    refStepper
  })

  return (
    <div>
      <h1>RefHook</h1>
      Timestamp: {timestamp} <br />
       Count: {refCount.current} <br />
      {/* Count: {count} <br /> */}
      First Name: <input ref={refTest} defaultValue="nguyen nhat truong abcdfe tony" />
      <button onClick={updateForm}>Update Form</button> <br />
      <div 
        ref={refDivVirtual}
        style={{
          width: 500,
          height: 300,
          border: '1px solid #000',
          position: 'relative',
          overflow: 'auto'
        }}
      >
        <div>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining e
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining e
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining e
        </div>
        {/* <div 
          style={{
            position: 'absolute',
            bottom: 0
          }}
          ref={refDivVirtual}
        /> */}
      </div>
      <br />
      Demo forward Ref: <TestElement ref={reftParentElement} />
      <button onClick={updateTimeStamp}>Update timestamp</button>
    </div>
  )
}

export default RefHook