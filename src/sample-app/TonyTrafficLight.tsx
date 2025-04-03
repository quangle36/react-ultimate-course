import React from "react"

interface ILight {
  backgroundColor: string,
  duration: number,
  next: string
}

interface ILightCongfig {
  [key: string]: ILight
}

const lightConfig: ILightCongfig = {
  red: {
    backgroundColor: 'red',
    duration: 4000,
    next: 'green'
  },
  yellow: {
    backgroundColor: 'yellow',
    duration: 1000,
    next: 'red'
  },
  green: {
    backgroundColor: 'green',
    duration: 3000,
    next: 'yellow'
  }
}

function TonyTrafficLight() {
  const [currentColor, setCurrentColor] = React.useState('green');

  React.useEffect(() => {
    const { duration, next } = lightConfig[currentColor];

    const timer = setTimeout(() => {
      setCurrentColor(next);
    }, duration)
   
    return () => {
      clearTimeout(timer)
    }
  }, [currentColor])

  return (
    <div>
      <h1>TonyTrafficLight</h1>

      <div className="traffic_container">
        <div className="traffic-light-container traffic-light-container--vertical">
          {Object.keys(lightConfig).map(color => {
            return (
              <div 
                key={color}
                className="traffic-light" 
                style={{ backgroundColor: color === currentColor ? lightConfig[color].backgroundColor : undefined }} 
              />
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default TonyTrafficLight