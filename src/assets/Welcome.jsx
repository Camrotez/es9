import Age from "./Age"
function Welcome(props) {
  return (
    <div>
      <p>Welcome {props.name}</p>
      {props.age >18 && props.age <65 ?<Age age2 = {props.age}/> : "muori"}
    </div>
  )
}

export default Welcome