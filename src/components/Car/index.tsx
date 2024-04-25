import { FC } from "react"

interface CarProps {
    image: string,
    title: string,
    start_production: number,
    class: string
}

const Car: FC<CarProps> = (props) => {
  return (
    <div className="w-25 p-3">
        <img src={props.image} alt="" style={{width: '100%', height: '250px'}} />
        <h3>{props.title}</h3>
        <h4>{props.start_production}</h4>
        <h4>{props.class}</h4>
    </div>
  )
}

export default Car