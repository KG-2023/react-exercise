
//Arrow function syntax
const Header = (props) => {
  return (
    <div>
        <header>
            <h1 style={{textAlign:'center'}}>To-Do-App</h1>
            <h1 style={{textAlign:'center'}}>{props.title}</h1>
        </header>
    </div>
  )
}


export default Header